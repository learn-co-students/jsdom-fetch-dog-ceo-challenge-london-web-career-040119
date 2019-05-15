function getImages() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(obj => obj.message)
    .then(images => renderImages(images))
}

function renderImage(image) {
    const container = document.querySelector('#dog-image-container')
    const imageWrapper = document.createElement('div')

    imageWrapper.innerHTML = `<img src="${image}">`
    container.appendChild(imageWrapper)
}

  function renderImages(images) {
    images.forEach(image => renderImage(image))
  }
  
getImages()


    



function getBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(obj => obj.message)
    .then(breeds => renderBreeds(Object.keys(breeds)))
}

function renderBreed(breed) {
    const list = document.querySelector('#dog-breeds')
    const listItem = document.createElement('li')

    listItem.innerHTML = `${breed}`
    listItem.addEventListener('click', function() {
        listItem.style.color = "purple"
    })
    list.appendChild(listItem)
}

function renderBreeds(breeds) {
    // breeds = breeds
    breeds.forEach(breed => renderBreed(breed))
}

getBreeds()



// dropdown = document.querySelector('breed-dropdown').value

// function listBreeds(dropdown){
//     for (let i=0;i<breeds.length;i++){
//       breeds[i].startsWith(dropdown)
//       }
//   }
  
//   let startsWithN = breeds.filter(listBreeds(dropdown))

//   listBreeds(dropdown)