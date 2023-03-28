//fetch from the external api
fetch("https://dog.ceo/api/breeds/list/all")
.then((res) => res.json())
.then(data => renderBreed(data))

function renderBreed(breed){
  const container = document.querySelector(".container")
  console.log(breed.message)
  const nav = document.querySelector(".breed-list")
  nav.textContent = breed
}

