import getApiData from './components/api.js';
import showData from './components/showData.js';
import './style.css';

const itemContainer = document.querySelector('.list-items');
const itemCounter = document.getElementById('mov-count');
const likeBtn = document.querySelector('.fa-heart')
const storage = [{
  id:'1',
  l: 'Morbius',
  i: {
    imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlqKqkW0oljnsL6r__e2RL1bJbPc6J_BYu2S8jbqTmvfVY4rtZ'
  }
}, {
  id:'2',
  l: 'Avatar 2',
  i: {
    imageUrl: 'https://infomazza.com/wp-content/uploads/2016/05/Avatar-2.jpg'
  }
}, {
  id:'3',
  l: 'Batman',
  i: {
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/iAcbc5HgQeR9vtrR4cdunN.jpg'
  }
}, {
  id:'4',
  l: 'Flash',
  i: {
    imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_M4LEMchRMxniEb1Gw5kE_sYajpzgMfyy5AcP4X_zTvE6ijaK'
  }
}];

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IRmcCRWo9KSYZTxv7MqM/likes'

const createApp = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/a', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      name: 'Foodeez'
    })
  })
    .then((response) => response.text())
    .then((json) =>console.log(json));
};


let a = 'RtogD48rFUxgVZ4q9xII'

window.addEventListener('load', () => {
  // getApiData(itemContainer, itemCounter);
  showData(itemContainer, storage)
});
// const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/'
const id = 'IRmcCRWo9KSYZTxv7MqM'

// const registerNewApp = async () => {
//   const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
//     method: 'POST',
//     body: JSON.stringify({
//       name: 'Foodeez',
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });
//   const data = await response.text();
//   return data;
// };


itemContainer.addEventListener('click',(event)=>{
  if(event.target.tagName==='I') {
    addLike(event.target.id)
  }
})



const addLike = (id)=>{
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IRmcCRWo9KSYZTxv7MqM/likes',{
   method:'POST',
   headers: {
     'Content-type': 'application/json; charset=UTF-8'
   },
   body: JSON.stringify({
    "item_id": id
   })
  })
  .then(response=>response.text())
  .then(json=>console.log(json))
}