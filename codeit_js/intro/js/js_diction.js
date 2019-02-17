
$(document).ready(function(){
/**키보드의 버튼이 내려가는 순간 발생하는 이벤트 ('a', '5' 등 출력이 가능한 키에서만 동작하며, Enter, Esc 등의 키에는 반응하지 않음)*/
	$(document).on('keypress', pFunction);	
	function pFunction(e){
		console.log('good');
		console.log(e.type);
	};	
});
/**마우스 포인터가 영역 위로 올라올 경우 발생*/
/*$(document).on('mouseover', pFunction);*/

/**마우스 포인터가 영역에서 벗어날 경우 발생*/
/*$(document).on('mouseout',pFunction);*/

/**마우스 버튼을 누를 경우 발생*/
//$(document).on('mousedown', pFunction);

/**마우스 버튼을 누렸다 땔 경우 발생*/
//$(document).on('mouseup', pFunction);

/**마우스 버튼을 움직일 경우 발생*/
//$(document).on('mousemove', pFunction);

/**마우스 버튼을 두 번 누를 경우 발생*/
//$(document).on('dbclick', pFunction);
/**마우스를 드래그할 때 발생*/
//$('#logo').on('dragdrop', pFunction);

/**키보드의 버튼이 내려가는 순간 발생하는 이벤트*/
//$('#logo').on('keydown', pFunction);

/**포커스 이벤트*/
//포커스가 위치할 경우 발생
//$('#email').on('focus', pFunction);
//포커스를 다른곳으로 옮길 경우 발생
//$('#email').on('blur', pFunction);

/**입력 이벤트*/
/**선택 값을 바꿀 경우 발생*/
//$('#selectBox').on('change', pFunction);
/**사용자가 입력을 하는 경우 발생*/
//$('#inputBox').on('input', pFunction);
/**입력 양식의 하나가 선택될 때 발생*/
//$('#selectBox').on('select', pFunction);
/**폼을 전송하는 경우 발생*/
//$('#selectBox').on('submit', pFunction);


/**눌러진 키보드의 버튼이 다시 올라오면서 발생하는 이벤트*/
//$('#logo').on('keypress', pFunction);

/**스크롤 위치*/
var scrollLocation = $(window).scrollTop();
$(window).on('scroll',function(){
	console.log($(window).scrollTop());
})

/**화면 맨 위로*/
//$(window).scrollTop(0);
//$('html, body').animate({scrollTop:0}, 500);

/**반복문*/
$(.class).each(function() {

});

