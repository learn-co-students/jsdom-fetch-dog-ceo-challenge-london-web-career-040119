console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgBody = document.querySelector("#dog-image-container")
const listBody = document.querySelector("#dog-breeds")
const select = document.querySelector('#breed-dropdown')

function getDogs(url) {
    return fetch(url)
        .then((resp) => resp.json())
}

function getBreeds(url) {
    return fetch(url)
        .then(resp => resp.json())
}

function addDogs(dogs) {
    dogs.forEach((dog) => addDog(dog))
}

function addBreeds(breeds) {
    for (const el in breeds) { 
        if (select.value == el.split('')[0]) {
            addBreed(el) 
        }
    }
}

function addDog(dog) {
    const img = document.createElement('div')

    img.className = 'dog-image' 
    img.innerHTML = `<img src="${dog}" class="dog-image" />`
    imgBody.appendChild(img)
}

function addBreed(breed) {
    const list = document.createElement('li')

    list.innerHTML = `${breed}`
    listBody.appendChild(list)

    list.addEventListener('click', () => {
        list.style.color = 'red'
    })

}

document.addEventListener('DOMContentLoaded', (event) => {
    
    getDogs(imgUrl)
        .then((dogs) => addDogs(dogs.message))

    select.addEventListener("change", (event) => {

        lists = listBody.querySelectorAll('li')
        lists.forEach(element => element.remove())

        getBreeds(breedUrl)
            .then((breeds) => addBreeds(breeds.message))

    })

    
})

