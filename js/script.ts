type Dialogue = {
  ID: number;
  Gender: "male" | "female";
  SpriteID: number;
  dialogue: string;
  audio: boolean;
};

type DialogueData = {
  dialogue: Record<string, Dialogue>;
};

let currentDialogueIndex = 0;
let dialogues: Dialogue[] = [];

function updateDialogue(): void {
  const currentDialogue = dialogues[currentDialogueIndex];
  const speakerName = currentDialogue.Gender === "male" ? "Bruce" : "Nova";
  document.querySelector(".dialogueTitle")!.textContent = `${speakerName}:`;
  document.querySelector(".dialogueText")!.textContent =
    currentDialogue.dialogue;
  triggerAnimation(); // Restart the typing animation
  console.log(
    `ID: ${currentDialogue.ID}, Gender: ${currentDialogue.Gender}, SpriteID: ${currentDialogue.SpriteID}`
  );
}

function loadNextDialogue(): void {
  if (currentDialogueIndex < dialogues.length - 1) {
    currentDialogueIndex++;
    updateDialogue();
  }
}

function resetToFirstDialogue(): void {
  currentDialogueIndex = 0;
  updateDialogue();
}

function triggerAnimation(): void {
  const dialogueText = document.querySelector(".dialogueText") as HTMLElement;
  dialogueText.style.animation = "none"; // Remove the animation
  dialogueText.offsetHeight; // Trigger reflow
  dialogueText.style.animation = ""; // Reapply the animation
}

// Fetching the JSON data
fetch("./json/dialogue.json")
  .then((response) => response.json())
  .then((data: DialogueData) => {
    dialogues = Object.values(data.dialogue);
    updateDialogue(); // Initialize with the first dialogue
  })
  .catch((error) => console.error("Error loading dialogue data:", error));

document.getElementById("button")!.addEventListener("click", loadNextDialogue);
document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.key === "r" || event.key === "R") {
    resetToFirstDialogue();
  }
});
