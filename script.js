//In html I made a button, but then when it's clicked the id named demo with a class of disappear, will display none in css, the paragragh that appears when the button is clicked will disappear when you click again.
//this effect happens with the use of toggle, and the reson I'm using document.getelementbyid, I want to indicate that specific id found in html, to get the effect.
function myFunction(id) {
    document.getElementById("demo").classList.toggle("disappear");
}
//the following lines from 7 to 30 are all similar but for different divs. Elem is used rather than document piece of code because the div is a class.
//the on.. the word in the percentisis, in css with a dot infront adding a content of a image so it changes to another image.
function ona(elem) {
elem.classList.toggle("ona");
}
function onb(elem) {
elem.classList.toggle("onb");
}
function onc(elem) {
elem.classList.toggle("onc");
}
function ond(elem) {
elem.classList.toggle("ond");
}
function one(elem) {
elem.classList.toggle("one");
}
function onf(elem) {
elem.classList.toggle("onf");
}
function ong(elem) {
elem.classList.toggle("ong");
}
function onh(elem) {
elem.classList.toggle("onh");
}
function show(elem) {
elem.classList.toggle("purpletwo");
}
function text(elem) {
elem.classList.toggle("bluetwo");
}

document.getElementById("p1").innerHTML = "It's not a bird";
document.getElementById("p2").innerHTML = "It's not a plane";
document.getElementById("p3").innerHTML = "It's Superman";
