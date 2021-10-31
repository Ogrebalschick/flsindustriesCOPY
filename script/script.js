$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			document.location.href = "form.html";
		});
		return false;
	});

});

$(document).ready(function(){
	//Скрыть PopUp при загрузке страницы    
	PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
	$("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide(){
	$("#popup1").hide();
}

$(document).ready(function(){
	//Скрыть PopUp при загрузке страницы    
	PopUpHide2();
});
//Функция отображения PopUp
function PopUpShow2(){
	$("#popup2").show();
}
//Функция скрытия PopUp
function PopUpHide2(){
	$("#popup2").hide();
}