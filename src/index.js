const dogImage = (imgUrl) => {
  const dogWrapper = document.createElement('div');
  dogWrapper.className = 'dog-wrapper';

  const html = `<img src="${imgUrl}" class="dog-image" alt="A cute dog">`;
  dogWrapper.innerHTML = html;

  return dogWrapper;
};

const addDogImages = (urls) => {
  const dogImageContainer = document.querySelector('#dog-image-container');
  urls.forEach((url) => {
    dogImageContainer.appendChild(dogImage(url));
  });
};

const fetchDogImages = () => fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(response => response.json());

const breedListElement = (breed) => {
  const elem = document.createElement('li');
  elem.value = breed;
  elem.innerText = breed;
  return elem;
};

const populateBreedsSelect = (breeds) => {
  const breedsUl = document.querySelector('#dog-breeds');

  Object.entries(breeds).forEach(([key, value]) => {
    const breed = key;
    if (value.length === 0) {
      breedsUl.appendChild(breedListElement(breed));
    } else {
      value.forEach((variety) => {
        const breedName = `${breed} (${variety})`;
        breedsUl.appendChild(breedListElement(breedName));
      });
    }
  });
};

const fetchDogBreeds = () => fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json());


document.addEventListener('DOMContentLoaded', () => {
  fetchDogImages()
    .then(json => addDogImages(json.message));
  fetchDogBreeds()
    .then(json => populateBreedsSelect(json.message));
});

console.log('%c HI', 'color: firebrick');
