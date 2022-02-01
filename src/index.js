import getApiData from './components/api.js';
import './style.css';

const itemContainer = document.querySelector('.ListItems');

window.addEventListener('load', () => {
  getApiData(itemContainer);
});
