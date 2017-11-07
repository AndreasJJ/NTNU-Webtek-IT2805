var sideNavLinks = document.getElementsByClassName("sideNavLink");
Array.from(sideNavLinks).forEach( function(element) {
      element.addEventListener('click', linkNav);
});


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
	var sideNav = document.getElementById('sideNav');
	var newsBar = document.getElementById('nyheter');
	if (url.endsWith("index.html")) {
		var mainContent = document.getElementById('mainContent');
		if(window.getComputedStyle(sideNav, null).width != "0%" & sideNav.style.display != 'none' & /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			sideNav.style.display = 'none';
			newsBar.style.display = 'none';
			mainContent.style.display = 'block';
			mainContent.style.width = '100%';
		}
		else if(window.getComputedStyle(sideNav, null).width != "0%" & sideNav.style.display != 'none') {
			sideNav.style.display = 'none';
			newsBar.style.display = 'block';
			mainContent.style.display = 'block';
			mainContent.style.width = '80%';
		} else if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			sideNav.style.display = 'block';
			sideNav.style.width = '100%';
			mainContent.style.display = 'none';
			newsBar.style.display = 'none';
		}
		else {
			sideNav.style.display = 'block';
			sideNav.style.width = 'calc(100%/5)';
			mainContent.style.width = 'calc((100%/5)*4)';
			newsBar.style.display = 'none';
		}
	} else {
		var mainContent = document.getElementById('mainContent');
		if(window.getComputedStyle(sideNav, null).width != "0%" & sideNav.style.display != 'none' & /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			sideNav.style.display = 'none';
			mainContent.style.display = 'block';
			mainContent.style.width = '100%';
		}
		else if(window.getComputedStyle(sideNav, null).width != "0%" & sideNav.style.display != 'none') {
			sideNav.style.display = 'none';
			mainContent.style.display = 'block';
			mainContent.style.width = '80%';
		} else if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			sideNav.style.display = 'block';
			sideNav.style.width = '100%';
			mainContent.style.display = 'none';
		}
		else {
			sideNav.style.display = 'block';
			sideNav.style.width = 'calc(100%/5)';
			mainContent.style.width = 'calc((100%/5)*4)';
		}
	}
}
