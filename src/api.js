const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


const fetchImages = () =>
    fetch(imgUrl).then(response => response.json())

    const fetchBreeds = () =>
    fetch(breedUrl).then(response => response.json())
