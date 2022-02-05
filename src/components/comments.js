export const countComment = (json) => {
  if (json.length > 0) {
    return `Comments(<span class='comment-count-number'>${json.length}</span>)`;
  }
  // return '<li>No comments</li>';
};

export const getComments = async (id, commentContainer, commentCounter) => {
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IRmcCRWo9KSYZTxv7MqM/comments?item_id=${id}`, {})
    .then((response) => response.json())
    .then((json) => {
      if (json.length > 0) {
        json.forEach((item) => {
          commentContainer.innerHTML += `<li class="comment-item">${item.creation_date} ${item.username}: ${item.comment}</li>`;
        });
      }
      commentCounter.innerHTML = countComment(json);
    });
};

export const postComment = (id, username, comment) => {
  const a = fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IRmcCRWo9KSYZTxv7MqM/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: username.value,
      comment: comment.value,
    }),
    headers: {
      'Content-type': 'application/json, charset=UTF-8',
    },

  });
  return a.json();
};