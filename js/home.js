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

    document.body.style.backgroundImage =
      "url('../assets/backgrounds/space-start-page.png')";
    let start = document.querySelector(".start");
    start.style.bottom = "5vw";
    let info = document.querySelector(".info");
    info.style.top = "5vw";
    let text = document.querySelector(".text");
    text.style.right = "4vw";
    let audio = new Audio("../assets/audio/temp.mp3");
    audio.play();
  }
}
