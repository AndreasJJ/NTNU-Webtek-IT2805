function openSidebarMenu() {
	var sideNav = document.getElementById('sideNav');
	var newsBar = document.getElementById('nyheter');
	var mainContent = document.getElementById('mainContent');
	if(window.getComputedStyle(sideNav, null).width != "0%" & sideNav.style.display != 'none') {
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
		sideNav.style.width = 'calc(100%/3)';
		mainContent.style.width = 'calc((100%/3)*2)';
		newsBar.style.display = 'none';
	}
}
