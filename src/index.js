import {
  postComment,
  getComments
} from './components/comments.js';
import {
  getApiData,
  addLike,
} from './components/likeApi.js';
import showPop from './components/popup.js';
import './style.css';

const itemContainer = document.querySelector('.list-items');
const itemCounter = document.getElementById('mov-count');
const popupWindow = document.querySelector('.popup');

window.addEventListener('load', async () => {
  await getApiData(itemContainer, itemCounter);
});

itemContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'I') {
    addLike(event.target.id);
    const likesContainer = event.target.parentNode.querySelector('.total-likes');
    const newVal = +likesContainer.innerHTML + 1;
    likesContainer.innerHTML = newVal;
  } else if (event.target.tagName === 'BUTTON') {
    popupWindow.style.display = 'flex';
    const poster = event.target.parentNode.querySelector('.mov-post').src;
    const name = event.target.parentNode.querySelector('.mov-name').innerHTML;
    const {
      id
    } = event.target;
    showPop(popupWindow, poster, name, id);
    const commentContainer = document.querySelector('.comments-contain');
    const commentCounter = document.querySelector('.comments-counter-hammas');
    getComments(id, commentContainer, commentCounter);
    document.querySelector('.form').addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.querySelector('.input1');
      const comment = document.querySelector('.input2');
      postComment(id, username, comment);
      username.value = '';
      comment.value = '';
      // const commentContainer = document.querySelector('.comments-contain');
      commentContainer.innerHTML = ``
      // const commentCounter = document.querySelector('.comments-counter-hammas');
      getComments(id, commentContainer, commentCounter);
    });
    document.body.style.overflow = 'hidden';
  }
});

popupWindow.addEventListener('click', (event) => {
  if (event.target.tagName === 'I') {
    popupWindow.style.display = 'none';
    popupWindow.innerHTML = '';
    document.body.style.overflow = 'visible';
  }
});