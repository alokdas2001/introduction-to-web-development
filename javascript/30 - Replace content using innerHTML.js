function changeStyle() {

var paragraph = document.getElementsByClassName('para');


for(var i=0 ; i <paragraph.length ; i++){

 paragraph[i].innerHTML = " some new text" + (i+1);


}
}