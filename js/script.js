var currentDialogueIndex = 0;
var dialogues = [];
function updateDialogue() {
    var currentDialogue = dialogues[currentDialogueIndex];
    var speakerName = currentDialogue.Gender === "male" ? "Bruce" : "Nova";
    document.querySelector(".dialogueTitle").textContent = "".concat(speakerName, ":");
    document.querySelector(".dialogueText").textContent =
        currentDialogue.dialogue;
    triggerAnimation(); // Restart the typing animation
    console.log("ID: ".concat(currentDialogue.ID, ", Gender: ").concat(currentDialogue.Gender, ", SpriteID: ").concat(currentDialogue.SpriteID));
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
// Fetching the JSON data
fetch("./json/dialogue.json")
    .then(function (response) { return response.json(); })
    .then(function (data) {
    dialogues = Object.values(data.dialogue);
    updateDialogue(); // Initialize with the first dialogue
})
    .catch(function (error) { return console.error("Error loading dialogue data:", error); });
document.getElementById("button").addEventListener("click", loadNextDialogue);
document.addEventListener("keydown", function (event) {
    if (event.key === "r" || event.key === "R") {
        resetToFirstDialogue();
    }
});
