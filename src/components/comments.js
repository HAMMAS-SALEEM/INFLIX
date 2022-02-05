export const countComment = (json) => {
  if (json.length > 0) {
    return `Comments(${json.length})`;
  }
  return '<li>No comments</li>';
};

export const getComments = (id, commentContainer, commentCounter) => {
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IRmcCRWo9KSYZTxv7MqM/comments?item_id=${id}`, {})
    .then((response) => response.json())
    .then((json) => {
      if (json.length > 0) {
        commentContainer.innerHTML = '<li></li>';
        json.forEach((item) => {
          commentContainer.innerHTML += `<li class="comment-item">${item.creation_date} ${item.username}: ${item.comment}</li>`;
        });
      }
      commentCounter.innerHTML = countComment(json);
    });
};

export const postComment = (id, username, comment) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IRmcCRWo9KSYZTxv7MqM/comments', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: username.value,
      comment: comment.value,
    }),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => err);
};