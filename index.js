// Review
function divide(a,b){
  console.log(a/b)
}

function sum(a,b){
  console.log(a+b)
}
console.log(sum(10,20))
console.log(divide(10,5))

function operation(a, b, cb){
  cb(a, b)
}
console.log(operation(10,10,sum))
console.log(operation(10,5,divide))

//nested functions
function addNumber(x,y){
  let sum = x + y

  function showMessage(text){
    return text
  }
  console.log(showMessage("The sum is " + sum))
}
addNumber(100, 200)

function displayCounter(){
  let count = 0
  increment = function () {
    return ++count
  }
  return increment
}
let counter = displayCounter()
console.log(counter())

//array methods
//push
let names = ["John", "Paul", "George", "Ringo", "Pete", "Stuart", "Mike", "Keith"]
console.log(names)
console.log(names.push("Brian"))
console.log(names)
//unshift
console.log(names.unshift("Erin"))
console.log(names)

//spread operator
const newNames = [...names]
console.log(newNames)

//shift

names.shift()
console.log(names)

//pop 
names.pop()
console.log(names)

//slice
let newName =  [...names].slice(0, 3)
console.log(newName)

//splice
console.log(names.splice(0,3))


// How to select single elements
// use querySelector("")
// this will traverse the DOM and return the first element
// that matches the tag, class, or id

//Select by tag
const query = document.querySelector('div')
console.log(query)

//Select by class
const query2 = document.querySelector('.form-label')
console.log(query2)

// log response

// You can also use getElementById
//Select by id
let query4 = document.getElementById("poke-form-container")
console.log(query4)

//log response


//How to select multiple elements
//Select all elements
const query5 = document.querySelectorAll('div')
console.log(query5)

//Select elements by tag name
const query6 = document.getElementsByTagName('label')
console.log(query6)

//Select elements by class name
const query7 = document.getElementsByClassName('form-label')
console.log(query7)

const div1 = document.querySelector('div')
div1.textContent = "Dragon Ball Z"

div1.innerText = "Pokemon"

const newDiv = document.createElement('div')
newDiv.textContent = "My New Div"
document.body.appendChild(newDiv)
newDiv.innerHTML = '<p> use with caution </p>'

newDiv.innerHTML = ""


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
const pokeForm = document.getElementById("poke-form")
// 2. Select the div element with id `poke-container` using the .querySelector() method 
// and store in the variable `pokeContainer`.
const pokeContainer = document.querySelector("#poke-container")
console.log(pokeContainer)

// 3. Select the label elements with class name `form-label` using the .getElementsByClassName() 
// and store in the variable `labels`.
const labels = document.getElementsByClassName("form-label")
console.log(labels)

// 4. Select all the div elements using the .querySelectorAll() method 
// and store in the variable `allDivs`.
const allDivs = document.querySelectorAll("div")
console.log(allDivs)
// 5. Select the div element with id `lecture-goals` 
// and use the .remove() method to remove the element from the DOM
const query10 = document.getElementById("lecture-goals").remove()
// 6. Define a function `renderPokemon()` that will generate the HTML for each character card
//create function called renderPokemon()
function renderPokemons(){
  //create a card div for our character 
  const pokeCard = document.createElement("div")
  //assign an id and classname for the pokeCard
  pokeCard.className = "poke-card"
  //create an image tag for our character card
  const pokeImg = document.createElement("img")
  pokeImg.src = pokemons[0].img

  const pokeName = document.createElement("h3")
  pokeName.textContent = pokemons[0].name

  const pokeLikes = document.createElement("h3")
  pokeLikes.textContent = pokemons[0].likes

  //append to the div element
  pokeCard.append(pokeImg, pokeName, pokeLikes)
  //pokeCard.append(pokeName)
  //pokeCard.append(pokeLikes)
  pokeContainer.appendChild(pokeCard)

} 

//renderPokemons()
function renderPokemon(){
  //select poke-container div
  const pokeDiv = document.querySelector("#poke-container")
  pokemons.forEach((poke)=> {
    const pokeCard = document.createElement("div")
    const pokeImg = document.createElement("img")
    pokeImg.src = poke.img
    const pokeName = document.createElement("h3")
    pokeName.textContent = poke.name
    const pokeLikes = document.createElement("h3")
    pokeLikes.textContent = poke.likes
    //const pokeParagraph = document.createElement("p")
    //pokeParagraph.textContent = poke.name
    //pokeParagraph.innerHTML = `<img src=${poke.img} width="500" height="400"/>`
    pokeDiv.append(pokeImg, pokeName, pokeLikes)

  })
}

renderPokemon()

