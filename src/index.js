import getApiData from './components/api.js';
import './style.css';

const itemContainer = document.querySelector('.listItems');

window.addEventListener('load', () => {
  getApiData(itemContainer);
});