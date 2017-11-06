/*
    FILE NAME: js/galleri.js
WRITTEN BY: Ole Fredrik Borgundvåg Berg
WHEN: Oktober 2017
PURPOSE: lage et dynamisk billedgalleri
*/
var canvas = document.getElementById("bildegalleri");
var ctx = canvas.getContext("2d");
var bildenr = 0;
var bilde1 = new Image();
var tegn = function () {
    ctx.drawImage(bilder[bildenr], 0, 0);
}
bilde1.onload = tegn; //tegner første bilde først når det er lastet inn
var bilde2 = new Image();
var bilde3 = new Image();
var bilde4 = new Image();
var bilde5 = new Image();
var bilder = Array(bilde1, bilde2, bilde3, bilde4, bilde5);
var bevegelse = null;
var pilvising = null;
var venstreX = 0;
var hoyreX = 0;
var detteX = 0;
var nesteX = 0;
var musX = 0;
var musY = 0;
var overCanvas = false;
for (x in bilder) { //henter bilder fra adressene
    bilder[x].src = "img/galleri" + x.toString() + ".jpg";
}
var neste = bilder[bildenr];
var dette = bilder[bildenr];

function bytte(dette, fremover) {
    if (bevegelse != null) { //fjerner animasjon om det er noen
        clearInterval(bevegelse);
    }
    detteX = 0;
    nesteX = canvas.width;
    if (!fremover) {
        nesteX *= -1;
    }
    if (bilder.indexOf(dette) == 4 && fremover) { //henter neste bilde
        neste = bilder[0];
    } else if (bilder.indexOf(dette) == 0 && !fremover) {
        neste = bilder[4];
    } else if (fremover) {
        neste = bilder[bilder.indexOf(dette) + 1];
    } else {
        neste = bilder[bilder.indexOf(dette) - 1];
    }
    bevegelse = window.setInterval(function (event) { //selve animasjonen med bildebytte
        if (fremover) {
            detteX -= 10;
            nesteX -= 10;
        } else {
            detteX += 10;
            nesteX += 10;
        }
        ctx.drawImage(dette, detteX, 0);
        ctx.drawImage(neste, nesteX, 0);
        if (overCanvas) { //tegner pilene på canvasen hvis det er noen
            if (pilvising != null) {
                clearInterval(pilvising);
            }
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
        if (nesteX == 0) {
            clearInterval(bevegelse);
        }
    }, 20);
}

function vis_piler(vis) {
    if (pilvising != null) { //fjerner animasjon m/ pilflytting om det er noen
        clearInterval(pilvising);
    }
    if (vis) {
        venstreX = (-80);
        hoyreX = canvas.width;
    } else {
        venstreX = 0;
        hoyreX = canvas.width - 80;
    }
    pilvising = window.setInterval(function () { //henter frem og tilbake piler
        if (vis) {
            venstreX += 5;
            hoyreX -= 5;
        } else {
            venstreX -= 5;
            hoyreX += 5;
        }
        ctx.drawImage(neste, nesteX, 0);
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
        if (venstreX == 0) {
            clearInterval(pilvising);
        }
    }, 10);
}

function klikk(event) { //registerer klikk på canvasen og finner hvor de er
    musX = event.pageX - canvas.offsetLeft;
    musY = event.pageY - canvas.offsetTop;
    var arrowwidth = 80 * canvas.offsetWidth/canvas.width;
    if (musX > 0 && musX < arrowwidth) { //klikker på pil tilbake
        bytte(neste, false);
    } else if (musX > canvas.offsetWidth - arrowwidth && musX < canvas.offsetWidth) { //klikker på pil frem
        bytte(neste, true);
    }
}
