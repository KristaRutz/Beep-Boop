//Back-end




//Front-end
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("#userNumber").val());
    console.log(inputNumber);
  });
});