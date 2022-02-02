import getApiData from './components/api.js';
import './style.css';

const itemContainer = document.querySelector('.list-items');
const itemCounter = document.getElementById('mov-count');

window.addEventListener('load', () => {
  getApiData(itemContainer, itemCounter);
});
