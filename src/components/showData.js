const showData = (itemContainer, storage) => {
  storage.forEach((item) => {
    itemContainer.innerHTML += `<li class="item">
<img class="mov-post" src=${item.i.imageUrl}>
<div class="mov-detail">
<p class="mov-name">${item.l}</p>
<div class="likes">
<h4 class="total-likes">0</h4>
<i id=${item.id} class="fas fa-heart"></i>
</div>
</div>
<button type="button" class="comments">Comments</button>
</li>`;
  });
};

export default showData;