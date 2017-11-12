window.onload=function(){
utdanning();
velgParti(1);
}

var studentpartiet = document.getElementById("programMening");
var andrepartier = document.getElementById("programAnnetPartiMening");
var valgtParti = 1;
var valgtSak = "stotte";
function stotte(){
  studentpartiet.innerHTML = "<h1>Studentpartiet</h1>Vi vil ha mulighet til å spare i BSU for å komme tidlig inn i boligmarkedet. Vi håper dette bil bidra til å gi oss mulighet til å eie bolig, også før fullført studie.";
  if(valgtParti==1){
    andrepartier.innerHTML = "<h1>Høyre</h1>Høyre vil styrke BSU-ordningen for å hjelpe unge inn på boligmarkedet. Det kan være vanskelig for unge å komme inn på boligmarkedet på grunn av høye boligpriser og økte egenkapitalkrav."+" Regjeringens utvidelse av BSU-ordningen hjelper flere unge inn i boligmarkedet.Sparing i forkant av kjøp er helt nødvendig for de fleste. "+"Høyre vil stimulere til sparing, og har derfor styrket BSU-ordningen betydelig."+" I statsbudsjettet for 2016 ble sparebeløpet økt ytterligere til 300.000 kroner. Med regjeringens endringer vil BSU-ordningen igjen bli en ordning som kan gi ungdom mulighet til å spare et stort nok beløp til å klare egenkapitalkravet fra bankene.";
    } else if (valgtParti==2) {
    andrepartier.innerHTML = "<h1>Arbeiderpartiet</h1> Det er viktigere med andre grep enn å øke BSU-grensen ytterligere. Svært få klarer i dag å fylle opp BSU-kontoen."+"Bare litt over hver fjerde i aldersgruppen 17-33 år sparer i BSU-ordningen. Av disse igjen er det bare 9 prosent som klarer å fylle opp BSU-kontoen."+"Fordi så få BSU-brukere når maksgrensen vil ikke en økning hjelpe dem som trenger det mest, bare de som allerede har god inntekt og penger å sette av."+"BSU-ordningen er bare en av mange ting i en helhetlig politikk rettet mot unges økonomi. Vi ønsker en politikk som bidrar til stabil økonomisk utvikling, sikrer høy sysselsetting og unngår unødig høye renter. "+"Det betyr mye for unges muligheter til å etablere seg med egen bolig.";
  } else if (valgtParti==3) {
    andrepartier.innerHTML = "<h1>Sosialistisk venstre</h1>SV har ikke uttalt seg i denne saken som parti.";
  } else if (valgtParti==4) {
    andrepartier.innerHTML = "<h1>Fremskrittspartiet</h1>Hvert år står flere tusen studenter uten et sted å bo. Vi vil legge til rette for at flere private aktører kan bygge studentboliger på samme vilkår som studentsamskipnadene. Dersom dagens monopolordninger avskaffes, er det mulig å bygge flere boliger til en lavere pris og raskere. Vi vil ta i bruk gode løsninger som er benyttet i andre land for raskt å kunne sette opp flere studentboliger, slik som for eksempel brakke- eller containerstudentbyer av høy kvalitet. Vi vil i tillegg heve grensen for hva unge mennesker årlig og totalt sett kan spare gjennom BSU-ordningen (Boligsparing for Ungdom).";
  }
  valgtSak="stotte";
  document.getElementById("programStotte").style.border = "solid 2px #e9a301";
  document.getElementById("utdanning").style.border = "solid 2px black";
  document.getElementById("samferdsel").style.border = "solid 2px black";
  document.getElementById("arbeidogvelferd").style.border = "solid 2px black";
}
function utdanning(){
  studentpartiet.innerHTML = "<h1>Studentpartiet</h1>Vi vil ha støtte til alle studenter som tar utdanning. Vi vil også at støtten skal gies, også i sommerferien. Boligen krever leie, vi krever penger til leien.";
  if(valgtParti==1){
    andrepartier.innerHTML = "<h1>Høyre</h1>Et godt utdanningssystem er en forutsetning for arbeids- og  næringslivet. Vi vil øke investeringene i universiteter og høyskoler, og satse på kunnskap og forskning."+"Statsbudsjettet for 2017 inneholdt en betydelig satsing på kvalitet i høyere utdanning og forskning.  I perioden 2015-2017 har regjeringen fulgt opp Langtidsplanen for forskning og høyere utdanning med 2,2 mrd i økte bevilgninger (dette inkluderer Skattefunn). Vi vil styrke kvaliteten i høyere utdanning for å bygge kunnskapssamfunnet og sikre verdiskapingen.";
    } else if (valgtParti==2) {
    andrepartier.innerHTML = "<h1>Arbeiderpartiet</h1> Sikre frie og uavhengige universiteter og høyskoler i hele landet som kan gi studentene forskningsbasert undervisning av høy kvalitet, som er relevant og tilpasset et moderne kunnskapssamfunn.";
  } else if (valgtParti==3) {
    andrepartier.innerHTML = "<h1>Sosialistisk venstre</h1>Det viktigste for norsk skole er å få flere lærere, så det blir mer tid til hvert enkelt barn. I tillegg vil jeg være med på det opprøret mot hjemmeleksene som nå sprer seg i hele landet, og jeg har stor tro på at vi snart får innført SVs gamle kampsak om gratis skolemat. Slik kan vi lage en bedre skoledag med mer læring, og en bedre hverdag for familiene uten leksestress og matpakkemas.";
  } else if (valgtParti==4) {
    andrepartier.innerHTML = "<h1>Fremskrittspartiet</h1>Hvert år står flere tusen studenter uten et sted å bo. Vi vil legge til rette for at flere private aktører kan bygge studentboliger på samme vilkår som studentsamskipnadene. Dersom dagens monopolordninger avskaffes, er det mulig å bygge flere boliger til en lavere pris og raskere. Vi vil ta i bruk gode løsninger som er benyttet i andre land for raskt å kunne sette opp flere studentboliger, slik som for eksempel brakke- eller containerstudentbyer av høy kvalitet.";
  }
  valgtSak="utdanning";
  document.getElementById("programStotte").style.border = "solid 2px black";
  document.getElementById("utdanning").style.border = "solid 2px #e9a301";
  document.getElementById("samferdsel").style.border = "solid 2px black";
  document.getElementById("arbeidogvelferd").style.border = "solid 2px black";

}
function samferdsel(){
  studentpartiet.innerHTML = "<h1>Studentpartiet</h1>Vi i studentpartiet krever billig buss. Kollektiv prisene må senkes og det raskt. Nattbuss burde ikke koste noe ekstra. Det skal være billig å komme trygt hjem!";
  if(valgtParti==1){
    andrepartier.innerHTML = "<h1>Høyre</h1>"+"Et velfungerende kollektivnett er helt avgjørende for samfunnet."+" Befolkningsveksten i sentrale områder krever gode og bæredyktige løsninger. "+"Vi vil øke investeringene i samferdsel kraftig, og den største økningen vil komme innenfor kollektivtransport."+" Målet er å gjøre det så attraktivt at det de som kan la bilen stå gjør det."+"Siden regjeringsskiftet har vi økt støtten til kollektivtransport i byområdene. Det vil vi fortsette med. En særskilt innsats vil"+" bli rettet mot de største byområdene, hvor utfordringene og potensialet for å få flere til å bytte er størst.";
    } else if (valgtParti==2) {
    andrepartier.innerHTML = "<h1>Arbeiderpartiet</h1>Økt satsing på kollektivtransport, sykkel og gange vil gi lavere klimautslipp, bedre byluft og mindre kø i byene våre "+"Arbeiderpartiet vil at veksten i persontrafikken i og rundt de store byene skal tas med kollektivtransport, sykkel og gange. Dette er viktig for å redusere kø-, klima- og luftforurensning. Og det er nødvendig for at byene skal være gode steder å bo og for å utvikle nye arbeidsplasser. ";
  } else if (valgtParti==3) {
    andrepartier.innerHTML = "<h1>Sosialistisk venstre</h1>God kollektivtrafikk gjør at folk kommer seg dit de skal på en enkel og miljøvennlig måte uavhengig av om man eier bil eller ikke. Kollektivtrafikk bidrar til kutt i klimagassutslipp og renere luft. Kollektivsatsing gir også bedre trafikksikkerhet, mer attraktive bo- og oppvekstmiljø og bedre framkommelighet for næringsliv, kollektivtrafikk og nyttetransport. Stortinget vedtatt et mål om nullvekst i persontrafikken i byområdene. Da trengs god arealplanlegging og satsing på kollektiv, sykkel og gange framfor bil.";
  } else if (valgtParti==4) {
    andrepartier.innerHTML = "<h1>Fremskrittspartiet</h1>"+"Bedre tilgjengelighet, miljø og helse i storbyområdene - samt mulighet for selv å kunne velge hvilke fremkomstmidler kollektivreisende skal benytte, "+"har vært sentralt for regjeringen. Nå er hele 980 millioner av bevilgede 1 380 millioner kroner fordelt til forbedringer av kollektivtransporten.";
  }
  valgtSak="samferdsel";
  document.getElementById("programStotte").style.border = "solid 2px black";
  document.getElementById("utdanning").style.border = "solid 2px black";
  document.getElementById("samferdsel").style.border = "solid 2px #e9a301";
  document.getElementById("arbeidogvelferd").style.border = "solid 2px black";
}
function arbeid(){
  studentpartiet.innerHTML = "<h1>Studentpartiet</h1>Vi ønsker sikkert arbeid når vi er ferdig med studiet. Vi ønsker også mulighet til å få sommerjobb mellom semesterene slik at vi kan tjene opp litt penger. ";
  if(valgtParti==1){
    andrepartier.innerHTML = "<h1>Høyre</h1>Høyre ønsker et fleksibelt, familievennlig og trygt arbeidsliv med en sterk arbeidsmiljølov. Vi vil ha et arbeidsliv som har rom for flere enn i dag.";
    } else if (valgtParti==2) {
    andrepartier.innerHTML = "<h1>Arbeiderpartiet</h1> Fjerne den generelle adgangen til midlertidige ansettelser."+"Fjerne muligheten til å bruke arbeidskontrakter uten lønn mellom oppdrag, og såkalte nulltimerskontrakter."+"Gjøre det tydelig i lov og forskrifter hva det vil si å være arbeidstaker, og hva det vil si å være arbeidsgiver.";
  } else if (valgtParti==3) {
    andrepartier.innerHTML = "<h1>Sosialistisk venstre</h1>Det viktigste for norsk skole er å få flere lærere, så det blir mer tid til hvert enkelt barn. I tillegg vil jeg være med på det opprøret mot hjemmeleksene som nå sprer seg i hele landet, og jeg har stor tro på at vi snart får innført SVs gamle kampsak om gratis skolemat. Slik kan vi lage en bedre skoledag med mer læring, og en bedre hverdag for familiene uten leksestress og matpakkemas.";
  } else if (valgtParti==4) {
    andrepartier.innerHTML = "<h1>Fremskrittspartiet</h1>at alternative turnuser skal avgjøres lokalt"+"liberalisere arbeidsmiljøloven slik at den sikrer arbeidslivet fleksible, men trygge rammer og gi rom for lokal tilpasning åpne for at lærlinger kan følge ordinær arbeidstid hos lærebedriften";
  }
  valgtSak="arbeid";
  document.getElementById("programStotte").style.border = "solid 2px black";
  document.getElementById("utdanning").style.border = "solid 2px black";
  document.getElementById("samferdsel").style.border = "solid 2px black";
  document.getElementById("arbeidogvelferd").style.border = "solid 2px #e9a301";

}
function velgParti(parti){
  valgtParti = parti;
  if (valgtParti==1){
  document.getElementById("hoyre").style.border = "solid 2px #e9a301";
  document.getElementById("sv").style.border = "solid 2px black";
  document.getElementById("ap").style.border = "solid 2px black";
  document.getElementById("frp").style.border = "solid 2px black";
} else if (valgtParti==2){
  document.getElementById("hoyre").style.border = "solid 2px black";
  document.getElementById("sv").style.border = "solid 2px #e9a301";
  document.getElementById("ap").style.border = "solid 2px black";
  document.getElementById("frp").style.border = "solid 2px black";
} else if (valgtParti==3){
  document.getElementById("hoyre").style.border = "solid 2px black";
  document.getElementById("sv").style.border = "solid 2px black";
  document.getElementById("ap").style.border = "solid 2px #e9a301";
  document.getElementById("frp").style.border = "solid 2px black";
} else if (valgtParti==4){
  document.getElementById("hoyre").style.border = "solid 2px black";
  document.getElementById("sv").style.border = "solid 2px black";
  document.getElementById("ap").style.border = "solid 2px black";
  document.getElementById("frp").style.border = "solid 2px #e9a301";
}

  if (valgtSak=="stotte") {
    stotte();
  } else if (valgtSak=="utdanning") {
    utdanning();
  } else if (valgtSak=="samferdsel") {
    samferdsel();
  } else if (valgtSak=="arbeid") {
    arbeid();
  }
  return valgtParti
}
