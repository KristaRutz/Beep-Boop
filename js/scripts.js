var contains3 = /3/;
var contains2 = /2/;
var contains1 = /1/;

//Back-end
function generateList(int){
  var numbers = [];
  for (var i = 0; i <= int; i++){
    var stringNum = i.toString(10);
    if (stringNum.match(contains3)) {
      numbers.push('"I\'m sorry Dave, I\'m afraid I can\'t do that."');
    } else if (stringNum.match(contains2)) {
      numbers.push('"Boop!"');
    } else if (stringNum.match(contains1)) {
      numbers.push('"Beep!"');
    } else {
      numbers.push(i);
    }
  }
  var numberString = numbers.join(", ")
  return numberString;
}


//Front-end
$(document).ready(function() {
  $("#gameToggle").click(function() {
    $(".container2").hide();
    $(".container3").show();
  })

  $("#listToggle").click(function() {
    $(".container2").show();
    $(".container3").hide();
  });

  $("#listReset").click(function() {
    console.log("list form reset");
    $("#listOutput").text("");
  });

  $("#gameReset").click(function() {
    console.log("game form reset");
    $("#gameOutput").text("");
  });

  $("#inputForm").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("#userNumber").val());
    $("#listOutput").text(generateList(inputNumber));
  });

  $("#gameForm").submit(function(event) {
    event.preventDefault();
    console.log("game form submitted");

    var userGuessedNumber = parseInt($("#userGuessedNumber").val());

    $("#gameOutput").text((userGuessedNumber));
  })
});