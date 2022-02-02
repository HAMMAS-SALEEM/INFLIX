import getApiData from './components/api.js';
import './style.css';

const itemContainer = document.querySelector('.list-items');

window.addEventListener('load', () => {
  getApiData(itemContainer);
});
