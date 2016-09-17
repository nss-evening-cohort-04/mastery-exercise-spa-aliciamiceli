var CarLot = (function(){

var inventory = [];

var request = new XMLHttpRequest();
request.open('GET', 'inventory.json');
request.send();
request.addEventListener('load', getInventory)


return getInventory;
})();

function getInventory() {
  inventory = JSON.parse(this.responseText).cars;
  console.log(inventory)
  parseToDom(inventory);
}

var parseCarsToDom = "";
var currentCar;

function parseToDom(inventory) {
  var counter;
  for (var i = 0; i < inventory.length; i++) {
    currentCar = inventory[i];
    parseCarsToDom += `<div id='currentCar${currentCar.id}' class='col-md-4'><h1>${currentCar.make}</h1>`
    parseCarsToDom += `<h2>${currentCar.year} ${currentCar.model}</h2>`
    parseCarsToDom += `<h3>$${currentCar.price}</h3>`
    parseCarsToDom += `<h4 class='description' id='description_${i}'>${currentCar.description}</h4>`
    parseCarsToDom += `</div>`

  }
document.getElementById("container").innerHTML = parseCarsToDom;
}
