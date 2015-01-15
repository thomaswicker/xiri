/*
  __  __    _    ____ ___ ____   _   _    ___     __      _ ____  
 |  \/  |  / \  / ___|_ _/ ___| | \ | |  / \ \   / /     | / ___| 
 | |\/| | / _ \| |  _ | | |     |  \| | / _ \ \ / /   _  | \___ \ 
 | |  | |/ ___ \ |_| || | |___  | |\  |/ ___ \ V /   | |_| |___) |
 |_|  |_/_/   \_\____|___\____| |_| \_/_/   \_\_/     \___/|____/ 
                                                                                                                                                                                                                                                                                                                                                                                                                                                          
*/

/* =======================================================================================
   This JS is for Potion's responsive nav system
   ======================================================================================= 
*/

$(document).ready(function(){
    alert('done loading magicnav.js');
  });

(function () {
	var menuUL = $("#magic-nav ul");
	var menuLI = $("#magic-nav ul li");

	$( "#menu-icon" ).click(function() {
	  menuUL.slideToggle("fast","linear", function() {
	    $( "#menu-icon" ).toggleClass("toggled");
	  });
	});
		
	if ( $(window).width() < 640) {     
	  menuLI.click(function() {
		  menuUL.slideToggle("fast","linear", function() {
		    $( "#menu-icon" ).toggleClass("toggled");
		  });
		});
	}
})();

