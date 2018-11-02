$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();


		$(".active-olw").owlCarousel({
		loop:true,
		dots:true,
		margin:30,
		items:1,
		nav:true,
		navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
	
	});
	
	
	


	
}(jQuery));