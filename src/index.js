// console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', (event) => {

  // ##### challenge ONE #####
  const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  const imgDiv = document.getElementById("dog-image-container");
  const ulDiv = document.getElementById("dog-breeds");
  const dropDown = document.getElementById("breed-dropdown");


  // GET ALL IMAGES
  function getImages() {
    return fetch(imgUrl)
      .then((resp) => resp.json())
  }

  // ADD IMAGE
  function addImage (image) {
    const imgTag = document.createElement('img');
    imgTag.src = image
    imgDiv.append(imgTag)
  }

  // ADD IMAGES
  function addImages (images) {
    images.message.forEach( image => addImage(image))
  }

  // ADD COLOR
  function addImages (images) {
    images.message.forEach( image => addImage(image))
  }

  // add image elements to the DOM for each image in the array
  getImages().then((images) => addImages(images))


  // challenge ##### TWO #####

  // GET ALL BREEDS
  function getBreeds() {
    return fetch(breedUrl)
      .then((resp) => resp.json())
  }

  // ADD BREED
  function addBreed (breed) {
    const liTag = document.createElement('li');
    liTag.innerText = breed
    ulDiv.append(liTag)
    liTag.addEventListener("click", function (event) { liTag.style.color = "red"})
  }

  // ADD BREEDS
  function addBreeds (breeds) {
    for (const key in breeds.message){
      addBreed(key)
    }
    // Object.keys(breeds.message).forEach( breed => addBreed(breed))
  }

  // add the breeds to the page in an <ul>
  getBreeds().then((breeds) => addBreeds(breeds))

  // challenge ##### THREE #####
  // added event listener in addBreed()

  // challenge ##### FOUR #####
  dropDown.addEventListener("change", function(event) {
    getBreeds(breedUrl).then(breeds => addBreedsLetter(breeds));
  });

  
  function addBreedsLetter(object) {
    const lisEl = document.querySelectorAll("li");
    lisEl.forEach(element => {
      element.remove();
    });
    for (const key in object.message) {
      const selectedLetter = dropDown.selectedOptions[0].value;
      if (key[0] === selectedLetter) {
        addBreed(key);
      }
    }
  }

  

});