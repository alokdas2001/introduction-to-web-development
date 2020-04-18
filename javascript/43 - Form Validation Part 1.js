function validateTextbox() {

var box = document.getElementById("name");
var box2 = document.getElementById("address");
var box3 = document.getElementById("phone");
var box4 = document.getElementById("email");



 if (box.value == "" || box2.value == "" || box3.value=="" || box4.value== ""  ) {
alert("The field marked in red cannot be blank");
box.focus();
box.style.border = "solid 3px red";
return false;
 }

 }
 
 

 /* for min number of char to be added
 
 
 if (box.value.length < 5 || box2.value.length < 5 ) {
 alert("Please enter at least 5 characters");
 return false;
 }
 
 */