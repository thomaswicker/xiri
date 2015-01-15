// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require angular/angular
//= require angular-route/angular-route
//= require jquery/dist/jquery
//= require masonry/masonry
//= require jquery.easing/js/jquery.easing
//= require magic_nav
//= require app


$(window).load(function() {
    //JS BELOW IS FOR MASONRY INITIALIZATION
    $('.masonry').masonry({
     itemSelector : '.item',
     isAnimated: true,
     animationOptions: {
      duration: 700,
      easing: 'linear',
      queue: false
    }
  });
});

var cb = function() {
	var l = document.createElement('link'); l.rel = 'stylesheet';
	l.href = 'css/application.min.css';
	$("head").append(l);
};
var raf = requestAnimationFrame || mozRequestAnimationFrame ||
webkitRequestAnimationFrame || msRequestAnimationFrame;
if (raf) raf(cb);
else window.addEventListener('load', cb);



(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-57137070-1', 'auto');
ga('send', 'pageview');

