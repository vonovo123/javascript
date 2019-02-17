$('.buttons button').on('click',changeColor);
function changeColor(e){
	var targetType = e.currentTarget.id;
	if(targetType === "even-btn"){
		$('.card').each(function(){
			$(this).removeClass('selected');
			if(Number($(this).text()) % 2 == 0 ){
				$(this).addClass('selected');
			}
		});
	}else{
		$('.card').each(function(){
			$(this).removeClass('selected');
			if(Number($(this).text()) % 2 == 1 ){
				$(this).addClass('selected');
			}
		});
	}
}
