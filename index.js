
// How to select single elements
// use querySelector("")
// this will traverse the DOM and return the first element
// that matches the tag, class, or id

//Select by tag

//Select by class

// log response

// You can also use getElementById
//Select by id

//log response


//How to select multiple elements
//Select all elements


//Select elements by tag name


//Select elements by class name


//log response


//change the text of a div using textContent

//change the text using innerText

//create a new element, and add text to it


//change the content of a div using innerHTML

// remove elements using remove() and innerHTML()



const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://images.cults3d.com/6VgkTLM1j-CTAMhEJTtsRV1z6N8=/516x516/https://files.cults3d.com/uploaders/14845535/illustration-file/5d09c257-51ed-4d65-aa36-3f9201af34c4/ivysaur.png",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "charmander",
    img: "https://pixy.org/download/1207107/",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.pokemonpets.com/images/monsters-images-800-800/5-Charmeleon.webp",
    likes: 11,
  },
];

// 1. Select the form element with id `poke-form` using the .getElementById() method 
// and store in the variable `pokeForm`. 


// 2. Select the div element with id `poke-container` using the .querySelector() method 
// and store in the variable `pokeContainer`.

// 3. Select the label elements with class name `form-label` using the .getElementsByClassName() 
// and store in the variable `labels`.

// 4. Select all the div elements using the .querySelectorAll() method 
// and store in the variable `allDivs`.

// 5. Select the div element with id `lecture-goals` 
// and use the .remove() method to remove the element from the DOM.

// 6. Define a function `renderPokemon()` that will generate the HTML for each character card

