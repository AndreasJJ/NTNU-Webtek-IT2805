/*
    FILE NAME: js/galleri.js
WRITTEN BY: Ole Fredrik Borgundvåg Berg
WHEN: Oktober 2017
PURPOSE: lage et dynamisk billedgalleri
*/
var canvas = document.getElementById("bildegalleri");
var ctx = canvas.getContext("2d");
var bildenr = 0; //starter på bilde nr. 0
var bilde1 = new Image();

//tegner bildet på canvasen.
var tegn = function () { 
    ctx.drawImage(bilder[bildenr], 0, 0);
}

//tegner første bilde først når det er lastet inn
bilde1.onload = tegn;

//lager alle bildene
var bilde2 = new Image(); 
var bilde3 = new Image();
var bilde4 = new Image();
var bilde5 = new Image();

//lager et array m/alle bildene
var bilder = Array(bilde1, bilde2, bilde3, bilde4, bilde5); 

//ingen bevegelse eller pilvisning i starten
var bevegelse = null; 
var pilvising = null;
var venstreX = 0;
var hoyreX = 0;
var detteX = 0;
var nesteX = 0;
var musX = 0;
var musY = 0;
var overCanvas = false; //bool som sier om musen er over canvas

//henter bilder fra adressene, bilde0.jpg, bilde1.jpg osv.
for (x in bilder) { 
    bilder[x].src = "img/galleri/bilde" + x.toString() + ".jpg";
}
var neste = bilder[bildenr];
var dette = bilder[bildenr];

function bytte(dette, fremover) {

    //fjerner animasjon om det er noen
    if (bevegelse != null) { 
        clearInterval(bevegelse);
    }

    //detteX er x-verdien der det nåværende bildet skal tegnes
    detteX = 0;

    //nesteX er x-verdien der neste bilde skal tegnes, hvis man blar fremover start neste bilde akkurat der canvasen slutter.
    nesteX = canvas.width;

    //hvis man blar bakover starter det slik at det ligger på andre siden av canvasen
    if (!fremover) { 
        nesteX *= -1;
    }

    //henter neste bilde hvis man har kommet til enden og skal fremover
    if (bilder.indexOf(dette) == 4 && fremover) { 
        neste = bilder[0];
    } 

    //henter neste bilde hvis man har kommet til starten og skal bakover
    else if (bilder.indexOf(dette) == 0 && !fremover) {
        neste = bilder[4];    
    } 

    //neste bilde hvis man blar frem
    else if (fremover) { 
        neste = bilder[bilder.indexOf(dette) + 1];
    } 

    //neste bilde hvis man blar tilbake
    else { 
        neste = bilder[bilder.indexOf(dette) - 1];
    }

    //selve animasjonen med bildebytte
    bevegelse = window.setInterval(function (event) { 

        //endrer x-koordinatene til bildene utfra om man blar fremover eller bakover
        if (fremover) {
            detteX -= 10;
            nesteX -= 10;
        } else {
            detteX += 10;
            nesteX += 10;
        }

        //tegner dette og neste bildet på canvasen med x-koordinatene detteX og nesteX
        ctx.drawImage(dette, detteX, 0);
        ctx.drawImage(neste, nesteX, 0);

        //tegner pilene på canvasen hvis det er noen
        if (overCanvas) { 

            //hindrer at det blir animasjon på pilvisningene samtidig som man blar
            if (pilvising != null) {
                clearInterval(pilvising);
            }

            //kode som tegner pilene
            ctx.fillStyle = "white"
            ctx.globalAlpha = 0.2;
            ctx.fillRect(0, 0, 80, 437);
            ctx.fillRect(canvas.width - 80, 0, 80, 437);
            ctx.globalAlpha = 1;
            ctx.beginPath();
            ctx.moveTo(60, 180); 
            ctx.lineTo(60, 240);
            ctx.lineTo(20, 210);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(canvas.width - 60, 180);
            ctx.lineTo(canvas.width - 60, 240);
            ctx.lineTo(canvas.width - 20, 210);
            ctx.closePath();
            ctx.fill();
        }

        //hvis nesteX har kommet seg til 0 er bevegelsen ferdig
        if (nesteX == 0) {
            clearInterval(bevegelse);
        }
    }, 20);
}

function vis_piler(vis) {

    //fjerner animasjon m/ pilflytting om det er noen, siden at funksjonen kalles betyr at man har flyttet musa inn eller ut av canvasen
    if (pilvising != null) { 
        clearInterval(pilvising);
    }

    //bestemmer X-koordinatene til pilene når vi starter, ut ifra om de skal inn eller ut av canvasen
    if (vis) {
        venstreX = (-80);
        hoyreX = canvas.width;
    } else {
        venstreX = 0;
        hoyreX = canvas.width - 80;
    }

    //animasjon som henter frem og tilbake piler
    pilvising = window.setInterval(function () { 

        //flytter X-koordinatene til pilene m/ 5 piksler for hver frame
        if (vis) {
            venstreX += 5;
            hoyreX -= 5;
        } else {
            venstreX -= 5;
            hoyreX += 5;
        }

        //tegner bildet først slik at det kommer i bakgrunnen, dette fjerner også pilene fra forrige frame
        ctx.drawImage(neste, nesteX, 0);

        //tegner piler på høyre og venstre side, med x-koordinatene hoyreX og venstreX
        ctx.fillStyle = "white"
        ctx.globalAlpha = 0.2;
        ctx.fillRect(venstreX, 0, 80, 437);
        ctx.fillRect(hoyreX, 0, 80, 437);
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.moveTo(venstreX + 60, 180);
        ctx.lineTo(venstreX + 60, 240);
        ctx.lineTo(venstreX + 20, 210);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(hoyreX + 20, 180);
        ctx.lineTo(hoyreX + 20, 240);
        ctx.lineTo(hoyreX + 60, 210);
        ctx.closePath();
        ctx.fill();

        //hvis venstreX har blitt 0 er animasjonen ferdig
        if (venstreX == 0) {
            clearInterval(pilvising);
        }
    }, 10);
}

//registerer klikk på canvasen og finner hvor de er
function klikk(event) { 

    //finner x- og y-koordinatene til musa i forhold til canvas
    musX = event.pageX - canvas.offsetLeft;
    musY = event.pageY - canvas.offsetTop;

    //tykkelsen på pilene
    var arrowwidth = 80 * canvas.offsetWidth/canvas.width;


    //klikker på pil tilbake
    if (musX > 0 && musX < arrowwidth) { 

        //bytter til forrige bilde
        bytte(neste, false);
    } 

    //klikker på pil frem
    else if (musX > canvas.offsetWidth - arrowwidth && musX < canvas.offsetWidth) {

        //bytter til neste bilde
        bytte(neste, true);
    }
}
