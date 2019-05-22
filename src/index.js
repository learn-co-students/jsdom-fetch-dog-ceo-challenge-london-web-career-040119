let dogs = []
const ulEl = document.querySelector("ul")

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

function renderDog(element) {
  liEl = document.createElement("li")
  ulEl.appendChild(liEl)
  liEl.textContent = element
}

function renderDogImg(element) {
  imgContainer = document.querySelector("#dog-image-container")
  imgEl = document.createElement("img")
  imgContainer.appendChild(imgEl)

  imgEl.src = element
}

function getDogImgs() {
  fetch(imgUrl)
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      const array = json.message
      array.forEach(item => renderDogImg(item))
    })
}

function renderDogs(dogs) {
  ulEl.innerHTML = ``
  dogs.forEach(dog => renderDog(dog))
}

function getDogs() {
  dogs = []
  return fetch(breedUrl)
    .then(response => response.json())
    .then(json => {
      const object = json.message
      for (let dogName in object) {
        dogs.push(dogName)
      }
    })
}

function clickList() {
  const listItems = document.querySelectorAll("#dog-breeds li")
  listItems.forEach(function(listItem) {
    listItem.addEventListener("click", function() {
      const items = (this.style.color = "blue")
      array.forEach(item => renderDogImg(item))
    })
  })
}

function filter(letter) {
  return dogs.filter(dog => dog.startsWith(letter))
}

document.addEventListener("DOMContentLoaded", () => {
  getDogs()
    .then(() => renderDogs(dogs))
    .then(() => clickList())
  getDogImgs()

  const dropdown = document.querySelector("#breed-dropdown")
  dropdown.addEventListener("change", event => {
    renderDogs(filter(dropdown.options[dropdown.selectedIndex].text))
    clickList()
  })
})
