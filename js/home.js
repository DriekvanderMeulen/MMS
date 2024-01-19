let counter = 0;

// CSS animation class
const animationClass = "title-animate";

function handleEnterKeyPress(event) {
  if (event.key === "Enter") {
    manipulateTitle();
  }
}

document.addEventListener("keydown", handleEnterKeyPress);

function checkCounterAndManipulate() {
  // Implement your logic here for when counter === 2
  if (counter === 2) {
    // Example: console.log('Counter is 2');
  }
}

// Function to manipulate the title and apply animation
function manipulateTitle() {
  let titleElement = document.querySelector(".title");

  if (titleElement) {
    titleElement.innerHTML =
      'In samenwerking met <span class="bold">Centraal Bureau voor de Statistiek</span>';
    titleElement.classList.add(animationClass);
    titleElement.addEventListener("animationend", () => {
      titleElement.classList.remove(animationClass);
    });

    counter++;
    checkCounterAndManipulate();
  }
}

// Manipulate the DOM every 5 seconds
function manipulateDOMEvery5Seconds() {
  setInterval(manipulateTitle, 5000);

  setInterval(function () {
    let h1Element = document.querySelector(".title");
    if (h1Element) {
      h1Element.remove();
    }

    document.body.style.backgroundImage =
      "url('../assets/images/space-start-page.png')";

    let start = document.querySelector(".start");
    start.style.bottom = "5vw";
    let info = document.querySelector(".info");
    info.style.top = "5vw";
    let text = document.querySelector(".text");
    text.style.right = "4vw";
    let audio = new Audio("../assets/audio/temp.mp3");
    // audio.play();
  }, 10000);
}

manipulateDOMEvery5Seconds();
