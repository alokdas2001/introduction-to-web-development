function changeText () {

var parent = document.getElementById('main');
var child = parent.lastElementChild; // to last para
child.style.color = "blue";

// var child = parent.childNodes[3];  it includes white space also
//var child = parent.firstElementChild;  to first para
}