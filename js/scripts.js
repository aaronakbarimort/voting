$(document).ready(function () {
  var age = parseInt(prompt("Please type in your age?"));

  if (age > 18) {
    $('#ofAge').show();
  } else if (age === 18) {
    alert ("Congrats on being voting age! Make an informed choice.");
    $('#ofAge').show();
  } else {
    $('#underAge').show();
  }
});
