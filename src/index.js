const breedsArray = [];

const saveData = (json) => {
  Object.entries(json.message).forEach((breed) => {
    const [key, value] = breed;
    if (value.length === 0) {
      breedsArray.push(key);
    } else {
      console.warn(value);
      value.forEach((variety) => {
        breedsArray.push(`${key} (${variety})`);
      });
    }
  });

  return breedsArray;
};

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
  elem.className = 'breed';
  return elem;
};

const populateBreedsSelect = (breeds) => {
  const breedsUl = document.querySelector('#dog-breeds');
  breedsUl.innerHTML = '';

  breeds.forEach((breed) => {
    const element = breedsUl.appendChild(breedListElement(breed));
    element.addEventListener('click', (event) => {
      const el = event.target;
      if (el.className === 'breed-selected') {
        el.className = 'breed';
      } else {
        el.className = 'breed-selected';
      }
    });
  });
};

const fetchDogBreeds = () => fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(json => saveData(json));

const filteredBreeds = firstLetter => breedsArray.filter(elem => elem[0] === firstLetter);

document.addEventListener('DOMContentLoaded', () => {
  fetchDogImages()
    .then(json => addDogImages(json.message));
  fetchDogBreeds()
    .then(data => populateBreedsSelect(data));

  const breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', (event) => {
    const firstLetter = event.target.value;
    populateBreedsSelect(filteredBreeds(firstLetter));
  });
});

console.log('%c HI', 'color: firebrick');
