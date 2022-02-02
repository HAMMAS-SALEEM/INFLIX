import showData from './showData.js';
import itemCounter from './itemCounter.js';

const getApiData = (iContain, itemCount) => {
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
      const iCount = itemCount;
      itemCounter(storage.length, iCount);
      showData(itemContain, storage);
    });
};

export default getApiData;