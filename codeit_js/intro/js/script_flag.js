$('#btn1').on('click',blueFlagDown);
$('#btn2').on('click',whileFlagDown);
$('#btn3').on('click',blueDotFlagDown);
function blueFlagDown(){
	$('.flag.blue').addClass('down');
	setTimeout(blueFlagUp, 1000);
}
function blueFlagUp(){
	$('.flag.blue').removeClass('down');	
}

function blueDotFlagDown(){
	$('.flag.blue.dot').addClass('down');
	setTimeout(blueDotFlagUp, 1000);
}
function blueDotFlagUp(){
	$('.flag.blue.dot').removeClass('down');	
}

function whileFlagDown(){
	$('.flag.white').addClass('down');
	setTimeout(whileFlagUp, 1000);	
}
function whileFlagUp(){
	$('.flag.white').removeClass('down');
}
