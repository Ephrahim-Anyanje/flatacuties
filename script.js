// Get DOM elements
const characterBar = document.getElementById("character-bar");
const characterImage = document.getElementById("character-image");
const characterName = document.getElementById("character-name");
const voteCount = document.getElementById("vote-count");
const voteButton = document.getElementById("vote-button");
const resetButton = document.getElementById("reset-button");

let currentCharacter = null;

// URL of the JSON server
const BASE_URL = "http://localhost:3000/characters";

// Fetch characters from the server and display their names
fetch(BASE_URL)
  .then((response) => response.json())
  .then((characters) => {
    characters.forEach((character) => {
      const span = document.createElement("span");
      span.textContent = character.name;
      span.addEventListener("click", () => displayCharacter(character));
      characterBar.appendChild(span);
    });
  })
  .catch((error) => {
    console.error("Error fetching characters:", error);
  });

// Display selected character details
function displayCharacter(character) {
  currentCharacter = character;
  characterImage.src = character.image;
  characterName.textContent = character.name;
  voteCount.textContent = character.votes;
}

// Handle vote button click
voteButton.addEventListener("click", () => {
  if (currentCharacter) {
    currentCharacter.votes += 1;
    voteCount.textContent = currentCharacter.votes;
  }
});

// Handle reset button click
resetButton.addEventListener("click", () => {
  if (currentCharacter) {
    currentCharacter.votes = 0;
    voteCount.textContent = currentCharacter.votes;
  }
});
