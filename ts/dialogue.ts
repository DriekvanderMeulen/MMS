let currentDialogueIndex = 0;
let dialogues = [];

function updateDialogue() {
  const currentDialogue = dialogues[currentDialogueIndex];
  const speakerName = currentDialogue.Gender === "male" ? "Bruce" : "Nova";
  document.querySelector(".dialogueTitle").textContent = `${speakerName}:`;
  document.querySelector(".dialogueText").textContent =
    currentDialogue.dialogue;
  triggerAnimation(); // Restart the typing animation
  console.log(
    `ID: ${currentDialogue.ID}, Gender: ${currentDialogue.Gender}, SpriteID: ${currentDialogue.SpriteID}`
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
  const dialogueText = document.querySelector(".dialogueText");
  dialogueText.style.animation = "none"; // Remove the animation
  dialogueText.offsetHeight; // Trigger reflow
  dialogueText.style.animation = ""; // Reapply the animation
}

// Fetching the JSON data
fetch("./json/dialogue.json")
  .then((response) => response.json())
  .then((data) => {
    dialogues = Object.values(data.dialogue);
    updateDialogue(); // Initialize with the first dialogue
  })
  .catch((error) => console.error("Error loading dialogue data:", error));

document.getElementById("button").addEventListener("click", loadNextDialogue);
document.addEventListener("keydown", (event) => {
  if (event.key === "r" || event.key === "R") {
    resetToFirstDialogue();
  }
});
