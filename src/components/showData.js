import storage from "./storageManager";


const showData = (itemContainer) => {

    storage.forEach(item => {
        console.log(item)
        itemContainer.innerHTML += `<li class="item">
<img class="mov-post" src=${item.poster}>
<p class="mov-name">${item.movie}</p>
<button type="button" class="comments">Comments</button>
</li>`
    })

}

export default showData;