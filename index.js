const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.querySelector("#poke-form");
const pokeFormContainer = document.querySelector("#poke-form-container");



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
    id: e.id+1, //will need to change the id to be dynamic
    name: name,
    img: img,
    likes: 0,
  };

  fetch("http://localhost:3000/characters",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newChar)
  })

  renderPokemon(newChar);
  pokeForm.reset();
}
pokeForm.addEventListener("submit", createPokemon)

//TODO: create a function called displayComments to display the comments for each character
//when the pokeCard is clicked
//this function should make a get request to the endpoint
//use this function in a click event listener, when the pokeCard is clicked

function displayComments(character){
  fetch(`http://localhost:3000/comments/${character.id}`)
  .then(response => response.json())
  .then(char => {
    const card = document.querySelector("#poke-show-card")
    const comments = document.createElement("h4")
    console.log(char)
    comments.textContent = char.content;
    card.appendChild(comments)
  })
}
//render new comments

//create a form to post new comments

//call the comments form when you show the character card
function showCharacter(character){
  fetch(`http://localhost:3000/characters/${character.id}`)
  .then(response => response.json())
  .then(character => {
    const pokeCard = renderPokemon(character);
    pokeCard.id = "poke-show-card";
    //
    pokeContainer.replaceChildren(pokeCard);
  });
}


function renderPokemon(char) {
  const pokeCard = document.createElement("div");
  pokeCard.className = "poke-card";
  pokeCard.id = `poke-${char.id}`;
  pokeCard.addEventListener("click", () => {
    showCharacter(char);
    displayComments(char)
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
    //update the likes using patch
    //render the new update pessimistically
    //
    //
    // update the DOM to reflect the new number of likes optimistically
    likesNum.textContent = char.likes;
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-bttn";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function (e) {
    //use e.stopPropogation() to stop the event from bubbling up to the parent element
    e.stopPropagation();
    //remove comments using the delete
    pokeCard.remove();
  });

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likesBttn, deleteBtn);
  pokeContainer.appendChild(pokeCard);
  return pokeCard;
}