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

  function renderImages (images) {
    images.forEach(image => renderImage(image) )
  }
  
getImages()
    .then((images) => renderImages(images))

