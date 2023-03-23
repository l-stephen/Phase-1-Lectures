const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.querySelector("#poke-form");



function getPokemon(){
  fetch("http://localhost:3000/characters")
  .then(response => response.json())
  .then(characters => {
    characters.forEach(function (character) {
      renderPokemon(character);
    });
  });
}


getPokemon();
//TODO: Refactor this code to be a function
//create a function that makes a post request
//this function should make a post request to the endpoint
//use this function in a submit event listener, when the form is submitted
function createPokemon(e){
  e.preventDefault();
  const name = document.querySelector("#name-input").value;
  const img = document.querySelector("#img-input").value;
  //create a new character with the udpated id, name, img, and likes
  let newChar = {
    id: e.id+1,
    name: name,
    img: img,
    likes: 0,
  };
  fetch("http://localhost:3000/characters", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newChar),
  })

  renderPokemon(newChar);
  pokeForm.reset();
};
pokeForm.addEventListener("submit", createPokemon)

//TODO: //create a function called renderComments that takes in a character as an argument, and displays it comments
function renderComments(character) {
  

}

function showCharacter(character){
  fetch(`http://localhost:3000/characters/${character.id}`)
  .then(response => response.json())
  .then(character => {
    const pokeCard = renderPokemon(character);
    pokeCard.id = "poke-show-card";
    pokeContainer.replaceChildren(pokeCard);
  });
}


function renderPokemon(char) {
  const pokeCard = document.createElement("div");
  pokeCard.className = "poke-card";
  pokeCard.id = `poke-${char.id}`;
  pokeCard.addEventListener("click", () => {
    showCharacter(char);
    //TODO: When the card is clicked, display the comments associated with its character using the render comment function
    renderComments(char);
  })

  const pokeImg = document.createElement("img");
  pokeImg.src = char.img;
  pokeImg.alt = `${char.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = char.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = "Likes: ";

  const likesNum = document.createElement("h5");
  likesNum.className = "likes-num";
  likesNum.textContent = char.likes;
  
  const likesBttn = document.createElement("button");
  likesBttn.className = "like-bttn";
  likesBttn.textContent = "♥";
  likesBttn.addEventListener("click", function (e) {
    //use e.stopPropogation() to stop the event from bubbling up to the parent element
    e.stopPropagation();
    // increment the characters number of likes
    ++char.likes;
    // update the DOM to reflect the new number of likes
    likesNum.textContent = char.likes;
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-bttn";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function (e) {
    //use e.stopPropogation() to stop the event from bubbling up to the parent element
    e.stopPropagation();
    pokeCard.remove();
  });

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likesBttn, deleteBtn);
  pokeContainer.appendChild(pokeCard);
  return pokeCard;
}