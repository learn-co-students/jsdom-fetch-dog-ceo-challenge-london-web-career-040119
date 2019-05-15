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

document.addEventListener('DOMContentLoaded', () => {
  fetchDogImages()
    .then(json => addDogImages(json.message));
});

console.log('%c HI', 'color: firebrick');
