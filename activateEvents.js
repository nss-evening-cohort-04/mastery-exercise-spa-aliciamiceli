var activateEvents = (function (){

var input = document.getElementById("input")

var thisIsATest = new XMLHttpRequest();
thisIsATest.open('GET', 'inventory.json')
thisIsATest.send();
thisIsATest.addEventListener('load', runEventHandlerFunction)

function runEventHandlerFunction() {
//i barely got this running the way it is - much less with three iifes
}

return activateEvents;

})(CarLot || {});