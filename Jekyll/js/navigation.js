/* Henter alle elementene med klasse navnet sideNavLink og har en loop som gir alle en eventlistener */
var sideNavLinks = document.getElementsByClassName("sideNavLink");
Array.from(sideNavLinks).forEach( function(element) {
      element.addEventListener('click', linkNav);
});

/* En funksjon som gjør alle li elementene i ul listen i side navigasjonsbaren til lenker og denne funksjonen forteller dem hvor de skal linke. */
function linkNav(e) {
	switch (e.target.innerText.toLowerCase()) {
		case "om oss":
			location.href = 'om.html';
			break;
		case "program":
			location.href = 'program.html';
			break;
		case "støtt oss":
			location.href = 'stotte.html';
			break;
		case "kontakt oss":
			location.href = 'kontakt.html';
			break;
		case "historie":
			location.href = 'historie.html';
			break;
		case "politikere":
			location.href = 'politikere.html';
			break;
	}
}

function openSidebarMenu() {
	var url = window.location.href;
	var hostname = "http://" + window.location.hostname + "/";
	var sideNav = document.getElementById('sideNav');
	var newsBar = document.getElementById('nyheter');
	/* Sjekker om det er index siden eller en annen side */
	if (url == hostname) {
		var mainContent = document.getElementById('mainContent');
		/* Sjekker om sideNav er åpen og om det er en mobil */
		if(window.getComputedStyle(sideNav, null).display != 'none' & /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			sideNav.style.display = 'none';
			newsBar.style.display = 'none';
			mainContent.style.display = 'block';
			mainContent.style.width = '100%';
		}
		/* Sjekker om sideNAv er åpen */
		else if(window.getComputedStyle(sideNav, null).display != 'none') {
			sideNav.style.display = 'none';
			newsBar.style.display = 'block';
			mainContent.style.display = 'block';
			mainContent.style.width = '80%';
		} 
		/* hvis sidenav er lukket og det er en mobil */
		else if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			sideNav.style.display = 'block';
			sideNav.style.width = '100%';
			mainContent.style.display = 'none';
			newsBar.style.display = 'none';
		}
		/* hvis sidenav er lukket og det ikke er en mobil */
		else {
			sideNav.style.display = 'block';
			mainContent.style.width = 'calc((100%/5)*4)';
			newsBar.style.display = 'none';
		}
	} else {
		var mainContent = document.getElementById('mainContent');
		/* Sjekker om sideNav er åpen og om det er en mobil */
		if(window.getComputedStyle(sideNav, null).display != 'none' & /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			sideNav.style.display = 'none';
			mainContent.style.display = 'block';
			mainContent.style.width = '100%';
		}
		/* Sjekker om sideNAv er åpen */
		else if(window.getComputedStyle(sideNav, null).display != 'none') {
			sideNav.style.display = 'none';
			mainContent.style.display = 'block';
			mainContent.style.width = '100%';
		} 
		/* hvis sidenav er lukket og det er en mobil */
		else if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			sideNav.style.display = 'block';
			sideNav.style.width = '100%';
			mainContent.style.display = 'none';
		}
		/* hvis sidenav er lukket og det ikke er en mobil */
		else {
			sideNav.style.display = 'block';
			mainContent.style.width = 'calc((100%/5)*4)';
		}
	}
}
