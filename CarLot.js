var CarLot = (function(oldCarLot){

//fix this
var inventory = [];

var currentCar;

oldCarLot.parseToDom = function (inventory) {
  var counter;
  for (var i = 0; i < inventory.length; i++) {
  var parseCarsToDom = "";
    currentCar = inventory[i];
    newDiv = document.createElement('div');
    newDiv.classList.add("col-md-4");

    parseCarsToDom = `<div id="carCard${i}"><h1>${currentCar.make}</h1>`
    parseCarsToDom += `<h2>${currentCar.year} ${currentCar.model}</h2>`
    parseCarsToDom += `<h3>$${currentCar.price}</h3>`
    parseCarsToDom += `<h4 class='description' id='description${i}'>${currentCar.description}</h4></div>`

    newDiv.innerHTML = parseCarsToDom;

    document.getElementById('container').appendChild(newDiv);
      }
    }

oldCarLot.getInventory = function () {
  inventory = JSON.parse(this.responseText).cars;
  oldCarLot.parseToDom(inventory);
  addASpecificEventListenerToASpecificCard();
}


var request = new XMLHttpRequest();
request.open('GET', 'inventory.json');
request.send();
request.addEventListener('load', oldCarLot.getInventory)




return oldCarLot.getInventory;
})(CarLot || {});