const showData = (itemContainer, storage) => {
  storage.forEach((item) => {
    itemContainer.innerHTML += `<li class="item">
<img class="mov-post" src=${item.i.imageUrl}>
<p class="mov-name">${item.l}</p>
<button type="button" class="comments">Comments</button>
</li>`;
  });
};

export default showData;