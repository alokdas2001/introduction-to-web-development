function changeStyle() {

var paragraph = document.getElementsByClassName('para');


for(var i=0 ; i <paragraph.length ; i+=2){

 paragraph[i].style.color = "red";


}
}