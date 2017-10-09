function openSidebarMenu() {
	var sidebar = document.getElementById('sidebar');
	var mainPanel = document.getElementById('mainPanel');
	if(window.getComputedStyle(sidebar, null).width != "0%") {
		sidebar.style.width = '0%';
		sidebar.style.display = 'none';
		mainPanel.style.width = '100%';
	} else if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		sidebar.style.display = 'block';
		sidebar.style.width = '100%';
		mainPanel.style.width = '0%';
	}
	else {
		sidebar.style.display = 'block';
		//sidebar.animate([
		  // keyframes
		//  { transform: 'translateX(-300px)' }, 
		//  { transform: 'translateX(0px)' }
		//], { 
		  // timing options
		//  duration: 500,
		//  iterations: 1
		//});
		sidebar.style.width = 'calc(100%/3)';
		mainPanel.style.width = 'calc((100%/3)*2)';
	}
}
