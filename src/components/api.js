import showData from './showData.js';

const getApiData = (iContain) => {
  fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': '6cfee6df44mshcf56fc30c596fb8p1e0277jsnd261193704fc',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const itemContain = iContain;
      const storage = data.d;
      showData(itemContain, storage);
    });
};

export default getApiData;