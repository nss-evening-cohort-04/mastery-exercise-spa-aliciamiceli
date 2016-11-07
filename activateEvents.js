 var CarLot = (function (newCarLot){

 console.log("newCarLot", newCarLot);


var descriptionVar = "";
   newCarLot.addASpecificEventListenerToASpecificCard = function() {
    for (var i = 0; i < 4; i++) {
     var el = document.getElementById(`carCard${i}`)
     var descriptionVar = document.getElementById(`description${i}`)
    document.getElementById(`carCard${i}`).addEventListener('click', clickOnTheCar);

       function clickOnTheCar() {
         this.classList.toggle('col-md-4')
         this.classList.toggle("activeClick")
         input.value = "";
         input.focus();
         newDescriptor = this.lastChild;
         input.addEventListener('keypress', function(){
          newDescriptor.innerHTML = input.value;
        })
      }
    }
 }

  return newCarLot;

})(CarLot || {});