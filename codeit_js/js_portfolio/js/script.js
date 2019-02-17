$(document).ready(function(){
	
	var heightOfHeader = $('.header').height();
	var locationOfAbout = heightOfHeader + $('.about').height();
	// menu-right section's button color changing action by locate of scroll 


	function moveScrollThroughButton(e){
		var selectedButtion = $(e.target).text();
		if( selectedButtion === 'About' ){
			$('html, body').animate({scrollTop:heightOfHeader},1000);
		}else if (selectedButtion === 'Contact'){
			$('html, body').animate({scrollTop:locationOfAbout},1000);
		}
	}

	function showVerticalCenter(){	
		if( 0 <= $(document).scrollTop()  && $(document).scrollTop() < heightOfHeader ){
			$('.header .vertical-center').animate({opacity:1, top:0},1000);				
		}else if( (heightOfHeader <= $(document).scrollTop()) && ($(document).scrollTop() < locationOfAbout)){
			$('.about .vertical-center').animate({opacity:1, top:0},1000);
			var innerBars = $('.about .skill .bar .inner-bar'); 
			var percentages = $('.about .skill .bar .percentage'); 
			for ( var i = 0; i < percentages.length; i ++){
				var innerBarPer = $('.about .skill .bar').width() * ($(percentages[i]).text().replace("%","") / 100);
				$(innerBars[i]).animate({width:innerBarPer},1000);

			}
		}else{ 
			$('.contact .vertical-center').animate({opacity:1, top:0},1000);
		}
	}

	function scrollAction(){

		var switchPoint = $('.header').height();//754.4
		if( $(document).scrollTop() > switchPoint ){
			$('.menu-right button').css('color','#4A4A4A');
		}else if ($(document).scrollTop() <= switchPoint){
			$('.menu-right button').css('color','white');
		}
		showVerticalCenter();
	}

	showVerticalCenter();
	$(window).on('scroll',scrollAction);
	$('.menu-right button').on('click', moveScrollThroughButton);

})