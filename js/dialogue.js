var currentDialogueIndex = 0;
var dialogues = [];

function updateDialogue() {
  var currentDialogue = dialogues[currentDialogueIndex];
  var speakerName = currentDialogue.Gender === "male" ? "Bruce" : "Nova";
  var dialogueTitleElement = document.querySelector(".dialogueTitle");

  if (currentDialogue.Gender === null) {
    dialogueTitleElement.textContent = "";
  } else {
    dialogueTitleElement.textContent = speakerName + ":";
  }

  dialogueTitleElement.classList.toggle(
    "dialogueTitle",
    currentDialogue.Gender !== null
  );
  document.querySelector(".dialogueText").textContent =
    currentDialogue.dialogue;
  triggerAnimation();

  console.log(
    "ID: "
      .concat(currentDialogue.ID, ", Gender: ")
      .concat(currentDialogue.Gender, ", SpriteID: ")
      .concat(currentDialogue.SpriteID)
  );
}

function loadNextDialogue() {
  if (currentDialogueIndex < dialogues.length - 1) {
    currentDialogueIndex++;
    updateDialogue();
  }
}
function resetToFirstDialogue() {
  currentDialogueIndex = 0;
  updateDialogue();
}
function triggerAnimation() {
  var dialogueText = document.querySelector(".dialogueText");
  dialogueText.style.animation = "none"; // Remove the animation
  dialogueText.offsetHeight; // Trigger reflow
  dialogueText.style.animation = ""; // Reapply the animation
}
function loadPreviousDialogue() {
  if (currentDialogueIndex > 0) {
    currentDialogueIndex--;
    updateDialogue();
  }
}

// Fetching the JSON data
fetch("./json/testDialogue.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    dialogues = Object.values(data.dialogue);
    updateDialogue(); // Initialize with the first dialogue
  })
  .catch(function (error) {
    return console.error("Error loading dialogue data:", error);
  });
document
  .querySelector(".rightButton")
  .addEventListener("click", loadNextDialogue);
document.addEventListener("keydown", function (event) {
  if (event.key === "r" || event.key === "R") {
    resetToFirstDialogue();
  }
});

document
  .getElementById("rightWindowButton")
  .addEventListener("click", function () {
    document.querySelector(".right-window").classList.toggle("show");
    console.log("right ejected");
  });

document
  .getElementById("leftWindowButton")
  .addEventListener("click", function () {
    document.querySelector(".left-window").classList.toggle("show");
    console.log("left ejected");
  });

document
  .querySelector(".leftButton")
  .addEventListener("click", loadPreviousDialogue);
