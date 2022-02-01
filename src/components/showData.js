import storage from './storageManager.js';

const showData = (itemContainer) => {
  storage.forEach((item) => {
    itemContainer.innerHTML += `<li class="item">
<img class="mov-post" src=${item.poster}>
<p class="mov-name">${item.movie}</p>
<button type="button" class="comments">Comments</button>
</li>`;
  });
};

export default showData;