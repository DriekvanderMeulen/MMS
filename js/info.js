let audioStatus = null; // Store the current audio status

// Function to fetch and check audio status
function checkAudioStatus() {
  // Fetch the JSON data
  fetch("./json/testDialogue.json")
    .then((response) => response.json())
    .then((data) => {
      // Get the audio status from the JSON data
      const newAudioStatus = data.audio;

      if (newAudioStatus !== audioStatus) {
        // Audio status has changed
        audioStatus = newAudioStatus;

        if (audioStatus === true) {
          // Audio is true, execute code for audio true
          console.log("Audio is true, executing code for audio true.");
          // Place your code here for when audio is true (execute different code).
        } else {
          // Audio is no longer true, execute code for audio false
          console.log(
            "Audio is no longer true, executing code for audio false."
          );
          // Place your code here for when audio is no longer true (execute different code).
        }
      }
    })
    .catch((error) => {
      console.error("Error loading audio status:", error);
    });
}

// Check audio status periodically (e.g., every 5 seconds)
setInterval(checkAudioStatus, 5000);
