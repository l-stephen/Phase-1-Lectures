
//const my_key = process.env.API_KEY

fetch("https://dog.ceo/api/breeds/image/random")
.then((res)=> res.json())
.then((data) => renderImage(data))

function renderImage(image){
  const dogImage = document.createElement("img")
  dogImage.src = image.message;
  dogImage.width = 120;
  dogImage.height = 120;
  const div1 = document.querySelector(".container")
  div1.append(dogImage)
}

fetch("http://api.openweathermap.org/data/2.5/weather?q=London&appid=7f015e291d54592e9315dfc3dbfa86a0", {
  mode: "no-cors",
})
.then((data)=> console.log(data))



