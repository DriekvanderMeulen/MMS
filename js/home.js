let counter = 0;

function handleEnterKeyPress(event) {
  if (event.key === "Enter") {
    let titleElement = document.querySelector(".title");

    if (titleElement) {
      titleElement.textContent = "In samenwerking met zuyd hogeschool";
      counter++;
      checkCounterAndManipulate();
    }
  }
}

document.addEventListener("keydown", handleEnterKeyPress);

function checkCounterAndManipulate() {
  if (counter === 2) {
    let h1Element = document.querySelector(".title");
    if (h1Element) {
      h1Element.remove();
    }
    // Correct way to set background image
    document.body.style.backgroundImage =
      "url('../assets/backgrounds/16by9placeholder.jpeg')";
    let start = document.querySelector(".start");
    start.style.bottom = "10vw";
    let info = document.querySelector(".info");
    info.style.top = "10vw";
  }
}
