var playlist = $('.playlist');
var toTopBtn = $('.to-top-btn');
function scrollHandler(){
	var playList = $('.playlist');
	var scrollHeight = $(window).scrollTop() + 480;
	var countOfList = Math.round(scrollHeight / 240);
	var playListHeight = playList.height()
	$(playList).slice(0,countOfList).each(function(){
		$(this).animate({opacity:1}, 1000);
	});
	var scrollLocation = $(window).scrollTop(); 
	console.log(Math.floor(scrollLocation));
	if(Math.floor(scrollLocation) == 1264){
		toTopBtn.show(500);
	}else{
		toTopBtn.hide(500);
	}
}
scrollHandler();
toTopBtn.on('click', function(){
	$('html, body').animate({scrollTop:0}, 500)
});
$(window).on('scroll', scrollHandler);

