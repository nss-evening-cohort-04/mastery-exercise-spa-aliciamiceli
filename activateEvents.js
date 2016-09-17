var activateEvents = (function (){

var input = document.getElementById("input")

input.addEventListener('keyup', inputFunction)

function inputFunction(event) {

    if (input.value == 't') {
    input.value = document.getElementById('description_0').innerHTML;
  } else if (input.value == 'p') {
    input.value = document.getElementById('description_1').innerHTML;
  } else if (input.value == 'a') {
    input.value = document.getElementById('description_2').innerHTML;
  } else if (input.value == 'f') {
    input.value = document.getElementById('description_3').innerHTML;
  }
}

})(CarLot || {});