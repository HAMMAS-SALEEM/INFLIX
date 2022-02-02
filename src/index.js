import getApiData from './components/api.js';
import './style.css';

const itemContainer = document.querySelector('.list-items');
const itemCounter = document.getElementById('mov-count')
console.log(itemCounter.innerHTML)

window.addEventListener('load', () => {
  getApiData(itemContainer,itemCounter);
});
