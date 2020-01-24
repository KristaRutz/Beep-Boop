//Back-end
function generateList(int){
  var numbers = [];
  for (var i = 0; i <= int; i++){
    numbers.push(i);
  }

  var numberString = numbers.join(", ")
  return numberString;
}


//Front-end
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("#userNumber").val());
    console.log(inputNumber);
    $("#output").text(generateList(inputNumber));
  });
});