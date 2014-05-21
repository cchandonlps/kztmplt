//alert( 'fenetre l: '+head.screen.innerWidth+'  fenetre h: '+head.screen.innerHeight+' ecran l: '+head.screen.width+'  ecran h: '+head.screen.height );

if (head.screen.innerWidth < 767 ) {
	head.load("css/capdel_smartphone.css","js/capdel_js.js", "js/jquery.min.js",  "css/slide_phone.css","js/jquery.glide.js", "js/jquery.slicknav.js" );
	head.ready(function () {
		goPhone();
	});
} else if (head.screen.innerWidth < 1024 ) {
	head.load("css/capdel_tablet.css","js/capdel_js.js", "js/jquery.min.js", "css/slide_tablet.css","js/jquery.glide.js" );
	head.ready(function () {
		goTablet();
	});
} else {
	head.load("css/capdel_desktop.css","js/capdel_js.js","js/jquery.min.js", "css/slide_desktop.css","js/jquery.glide.js");
	head.ready(function () {
		goDesktop();
	});
}



function goDesktop(){
	
	 $('.slider').glide({
		 arrowRightText : '',
		 arrowLeftText : '',
		 animationTimingFunc : 'ease'
	 });
	 $('.topvente').glide({
		 arrowRightText : '',
		 arrowLeftText : '',
		 arrowMainClass : 'topvente-arrow',
		 arrowRightClass : 'topvente-arrow--right',
		 arrowLeftClass : 'topvente-arrow--left',
		 navigation : false,
		 autoplay : 5000,
		 animationTimingFunc : 'ease'
	 });
	/*$('#slide_topvente').anythingSlider({
		autoPlay          : true,
		buildStartStop    : false,
		buildArrows		  : false,
		buildNavigation	  : false,
		delay               : 4000,
		hashTags		  : false
	});
	$('#slide_topvente').css('visibility', 'visible');
	
	$('#slider').anythingSlider({
		autoPlay          : true,
		buildStartStop    : false,
		hashTags		  : false
	});
	$('#slider').css('visibility', 'visible');*/
	
}

function goPhone(){
	
	$('.topvente').glide({
		 arrowRightText : '',
		 arrowLeftText : '',
		 arrowMainClass : 'topvente-arrow',
		 arrowRightClass : 'topvente-arrow--right',
		 arrowLeftClass : 'topvente-arrow--left',
		 navigation : false,
		 autoplay : 5000,
		 animationTimingFunc : 'ease'
	 });
	
	/*$('#slide_topvente').anythingSlider({
		autoPlay          : true,
		buildStartStop    : false,
		buildArrows		  : false,
		buildNavigation	  : false,
		hashTags		  : false
	});
	$('#slide_topvente').css('visibility', 'visible');*/
	
	$('#menu_m').slicknav();
	$('#menu_m').slicknav('open');
	
	var textfoot = document.getElementById('foot_last').innerHTML;
	document.getElementById('foot_last_m').innerHTML = textfoot;
	document.getElementById('foot_last_m').style.display = 'block';
	document.getElementById('foot_last').style.display = 'none';
}

function goTablet(){
	
	 $('.slider').glide({
		 arrowRightText : '',
		 arrowLeftText : '',
		 animationTimingFunc : 'ease'
	 });
	 $('.topvente').glide({
		 arrowRightText : '',
		 arrowLeftText : '',
		 arrowMainClass : 'topvente-arrow',
		 arrowRightClass : 'topvente-arrow--right',
		 arrowLeftClass : 'topvente-arrow--left',
		 navigation : false,
		 autoplay : 5000,
		 animationTimingFunc : 'ease'
	 });
	 
	document.getElementById('ml1').innerHTML = '<span>Format<br>d’événement</span>'; 
	document.getElementById('ml2').innerHTML = '<span>Soirée<br>entreprise</span>'; 
	document.getElementById('ml3').innerHTML = '<span>Séminaire<br>entreprise</span>'; 
	document.getElementById('ml4').innerHTML = '<span>Team building<br>& activité</span>';
	document.getElementById("ml1").className = 'menu_1';
	document.getElementById("ml2").className = 'menu_1';
	document.getElementById("ml3").className = 'menu_1';
	document.getElementById("ml4").className = 'menu_1';
}




