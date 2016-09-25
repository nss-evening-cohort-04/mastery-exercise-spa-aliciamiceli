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
  parseToDom(inventory);
}

var currentCar;

function parseToDom(inventory) {
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
    addASpecificEventListenerToASpecificCard();

var descriptionVar = "";
  function addASpecificEventListenerToASpecificCard() {
    var el = document.getElementById(`carCard${i}`)
    var descriptionVar = document.getElementById(`description${i}`)
    document.getElementById(`carCard${i}`).addEventListener('click', clickOnTheCar);

      function clickOnTheCar() {
        el.classList.toggle('col-md-4')
        el.classList.toggle("activeClick")
        input.value = "";
        input.focus();
        input.addEventListener('keypress', function(e){

          var key = e.which || e.keyCode;
          if (key === 13) {
          e.preventDefault();
          descriptionVar.innerHTML = descriptionVar.innerHTML +' ' + input.value;
          }
        })
      }
    }
  }
};