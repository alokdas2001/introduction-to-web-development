function changeStyle(){
	
	var confirmation = confirm("these are permanent");
	
	if (confirmation == true){
	
	var paragraph = document.getElementsByClassName('para');
	
	var first_para = paragraph[0].innerHTML;
	var second_para = paragraph[1].innerHTML;
	var addthem =  paragraph[2].innerHTML = first_para + second_para;
	
	
	var firstParaText = paragraph[0].innerHTML = " ";
	var SecondParaText = paragraph[1].innerHTML = " ";


	var remove = document.getElementById("test");
	remove.style.visibility="hidden";
	}

}

