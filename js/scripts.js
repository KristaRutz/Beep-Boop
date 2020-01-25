//Back-end

var contains3 = /3/;
var contains2 = /2/;
var contains1 = /1/;

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

function evaluateGuess(int, str){

  console.log(int);
  console.log(str);

  var stringInt = int.toString();

  if (stringInt.match(contains3)) {
    if (str === "sorry") {
      return true;
    } else {
      return false;
    }
  } else if (stringInt.match(contains2)) {
    if (str === "boop") {
      return true;
    } else {
      return false;
    }
  } else if (stringInt.match(contains1)) {
    if (str === "beep") {
      return true;
    } else {
      return false;
    }
  } else {
    if (str === "number") {
      return true;
    } else {
      return false;
    }
  }
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

  $("#listForm").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("#userNumber").val());
    $("#listOutput").text(generateList(inputNumber));
  });

  var level = 0;
  var lives = 5;

  $("#gameForm").submit(function(event) {

    if (lives > 0){
      event.preventDefault();
      
      var guessType = $("input:radio[name=guessType]:checked").val();
      var outputMessage = evaluateGuess(level, guessType);

      level++;
      $("#level").text(`Level: ${level}`);
      $("#gameOutput").text(outputMessage);

      if (outputMessage === false) {
        lives--;
        $("#lives").text(`Lives: ${lives}`);
        if (lives === 0){
          $("#submitButton").addClass("disabled");
          $("#gameOutput").text("Game Over");
          $("#submitButton").text("Refresh");
        }
      }
    }

  })
});