var CarLot = (function(){

var carData = "";

var request = new XMLHttpRequest();
request.open('GET', 'inventory.json');
request.send();
request.addEventListener('load', loadFunction)


  return carData;
})();

function loadFunction() {
  carData = JSON.parse(this.responseText);
  console.log(carData)
}