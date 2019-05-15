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

const populateBreedsSelect = (breeds, firstLetter) => {
  const breedsUl = document.querySelector('#dog-breeds');
  breedsUl.innerHTML = '';

  Object.entries(breeds).forEach(([key, value]) => {
    const breed = key;

    if (typeof firstLetter === 'undefined' || breed[0] === firstLetter) {
      let element;
      if (value.length === 0) {
        element = breedsUl.appendChild(breedListElement(breed));
      } else {
        value.forEach((variety) => {
          const breedName = `${breed} (${variety})`;
          element = breedsUl.appendChild(breedListElement(breedName));
        });
      }

      element.addEventListener('click', (event) => {
        const el = event.target;
        if (el.className === 'breed-selected') {
          el.className = 'breed';
        } else {
          el.className = 'breed-selected';
        }
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

  const breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', (event) => {
    const firstLetter = event.target.value;
    fetchDogBreeds()
      .then(json => json.message)
      .then(breeds => populateBreedsSelect(breeds, firstLetter));
  });
});

console.log('%c HI', 'color: firebrick');
