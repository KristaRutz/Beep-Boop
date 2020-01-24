var contains3 = /3/;
var contains2 = /2/;
var contains1 = /1/;

//Back-end
function generateList(int){
  var numbers = [];
  for (var i = 0; i <= int; i++){
    var stringNum = i.toString(10);
    if (stringNum.match(contains3)) {
      numbers.push("I'm sorry Dave, I'm afraid I can't do that.");
    } else {
      numbers.push(i);
    }
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