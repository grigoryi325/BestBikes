function FormValidation(){
	$("#btn_send").click(function(){
		var name = $("#name").val();
		var phone = $("#phone").val();
		
		if(name.length < 3){
			alert("Имя должно иметь не меньше трьох символов!");
		}else if(name.length == 0){
			alert("Поле имени не может быть пустым!");
		}else if(phone.length == 0){
			alert("Поле телефона не может быть пустым!");
		}
	});
}