const namesList = document.getElementById("names");
const animalName = document.getElementById("animal-name");
const animalImage = document.getElementById("animal-image");
const voteCount = document.getElementById("vote-count");
const voteButton = document.getElementById("vote-button");

let currentVotes = 0;

// STEP 1: Fetch all animals
fetch("http://localhost:3000/characters")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((animal) => {
      const li = document.createElement("li");
      li.textContent = animal.name;

      // STEP 2: Click to show details
      li.addEventListener("click", () => {
        showAnimalDetails(animal);
      });

      namesList.appendChild(li);
    });
  });

function showAnimalDetails(animal) {
  animalName.textContent = animal.name;
  animalImage.src = animal.image;
  voteCount.textContent = animal.votes;
  currentVotes = animal.votes;

  voteButton.onclick = () => {
    currentVotes += 1;
    voteCount.textContent = currentVotes;
  };
}
