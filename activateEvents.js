var CarLot = (function (newCarLot){

console.log("newCarLot", newCarLot);

  var descriptionVar = "";
    addASpecificEventListenerToASpecificCard = function(){
    for (var i = 0; i < 4; i++) {
      var el = document.getElementById(`carCard${i}`)
      var descriptionVar = document.getElementById(`description${i}`)
      el.addEventListener('click', clickOnTheCar);

        function clickOnTheCar(e) {
          e.currentTarget.classList.toggle('col-md-4')
          e.currentTarget.classList.toggle("activeClick")
          input.value = "";
          input.focus();
          input.addEventListener('keypress', function(){

            descriptionVar.innerHTML = input.value;
            })
          }
        }
      };

  return newCarLot;

})(CarLot || {});