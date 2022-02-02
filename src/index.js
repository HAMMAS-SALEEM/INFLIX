import getApiData from './components/api.js';
import './style.css';
import html from './index.html';

const itemContainer = document.querySelector('.listItems');

window.addEventListener('load', () => {
  getApiData(itemContainer);
});
