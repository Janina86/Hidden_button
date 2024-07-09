document.addEventListener("DOMContentLoaded", function() {
  let buttonIds = ["button1", "button2", "button3"];
  let randomIndex = Math.floor(Math.random() * buttonIds.length);
  let winningButtonId = buttonIds[randomIndex];

  function handleButtonClick(event) {
    let buttonId = event.target.id;
    if (buttonId === winningButtonId) {
      alert("You win!");
    } else {
      alert("You lose!");
    }
  }

  buttonIds.forEach(function(buttonId) {
    let button = document.getElementById(buttonId);
    button.addEventListener("click", handleButtonClick);
  });
});
