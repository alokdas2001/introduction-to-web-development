function newParagraph() {
	
	
// this is heading	
	
var header = document.createElement("h2"); 	
var main = document.getElementById("main");
main.appendChild(header);
var text1 = document.createTextNode("New battle");
header.appendChild(text1); 

// this is para

var element = document.createElement("p");  // create a empty p 
main.appendChild(element);  // adding empty p to main 
var text = document.createTextNode("The Battle of Salamis was fought between an alliance of Greek cities and the Persian Empire in 480 BC.  The Greeks decisively defeated the Persian navy.");
// creating which has to be added


element.appendChild(text);  // adding element to the empty p 

}