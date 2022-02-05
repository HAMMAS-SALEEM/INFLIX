import {
  postComment,
  getComments,
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
      id,
    } = event.target;
    showPop(popupWindow, poster, name, id);
    const commentContainer = document.querySelector('.comments-contain');
    const commentCounter = document.querySelector('.comments-counter-hammas');
    getComments(id, commentContainer, commentCounter);
    document.querySelector('.form').addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.querySelector('.input1');
      const comment = document.querySelector('.input2');
      if (username.value !== '' && comment.value !== '') {
        console.log(id);
        postComment(id, username, comment);
        const tComments = document.querySelector('.comment-count-number');
        const latestComment = +tComments.innerHTML + 1;
        tComments.innerHTML = latestComment;
        const data = new Date();
        const dateComment = `${data.getFullYear()}-0${data.getMonth()}-0${data.getDate()}`;
        commentContainer.innerHTML += `<li class="comment-item">${dateComment} ${username.value}: ${comment.value}</li>`;
        username.value = '';
        comment.value = '';
      }
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