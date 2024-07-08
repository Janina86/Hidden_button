document.addEventListener("DOMContentLoaded", function() {
  var buttonIds = ["button1", "button2", "button3"];

  var randomIndex = Math.floor(Math.random() * buttonIds.length);

  var winningButtonId = buttonIds[randomIndex];

  buttonIds.forEach(function(buttonId) {
    var button = document.getElementById(buttonId);
    button.addEventListener("click", function() {
      if (buttonId === winningButtonId) {
        alert("Ai câștigat!");
      } else {
        alert("Nu ai câștigat.");
      }
    });
  });
});
