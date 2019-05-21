
const dogDiv = document.querySelector("#dog-image-container")
const breedList = document.querySelector("#dog-breeds")
const dropDown = document.querySelector("#breed-dropdown")
const back = document.querySelector("#back")

let arrayDogs = []

const addImage = image => {
    const img = document.createElement('img')
    img.src = image

    dogDiv.append(img)
}


const addImages = imgUrl => 
    imgUrl.message.forEach(image => addImage(image))


const renderBreed = breed => {


    let li = document.createElement("li")
    li.className = "breed"

    li.innerText = `${breed}`

    breedList.append(li)

    li.addEventListener("click", () =>
        li.style.color = "red"
    )

}

const addBreeds = breedUrl => { 
    let arrayOfBreeds = Object.keys(breedUrl.message)
    arrayDogs = arrayOfBreeds
    arrayOfBreeds.forEach(breed => renderBreed(breed))
    console.log(arrayOfBreeds)
}

 dropDown.addEventListener("change", (event) => {
    breedList.innerHTML = ""
    let choice = event.target.value 
    let filteredDogs = arrayDogs.filter( x => x[0] === choice)

    filteredDogs.forEach(breed => renderBreed(breed))
 })

back.addEventListener("click", (event) => {
    breedList.innerHTML = ""
   arrayDogs.forEach(breed => renderBreed(breed))
}
)



const init = () => {
    fetchImages()
    .then(imgUrl => addImages(imgUrl))

    fetchBreeds()
    .then(breedUrl => addBreeds(breedUrl))
}

init()