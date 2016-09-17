var clickOnTheCurrentCar = (function (){

var container = document.getElementById("container")
var currentCar1 = document.getElementById("currentCar1")

console.log(currentCar1)

container.addEventListener('click', function(event) {
  console.log(this)
  event.target.classList.toggle("activeClick");
  input.value = "";
  input.focus();
});

})(CarLot || {});