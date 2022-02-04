const showPop = (popupWindow, poster, name, id) => {
  popupWindow.innerHTML = `<div class="popup-card">
    <i class="fa fa-times popupCrossBtn" aria-hidden="true"></i>
    <div class="for-fullscreen">
        <div class="demo">
            <img src=${poster} alt="Demo image">
        </div>
        <div class="for-fullscreen-section-02">
            <div class="description">
                <h3 class="mov-title">${name}</h3>
            </div>
            <div class="comment-counter">
                <h3>Comments(2)</h3>
                <ul class="comments">
                    
                </ul>
            </div>
            <div class="comment">
                <div class="add-comment">
                    <h3>Add Comment</h3>
                </div>
                <form class="form">
                    <input type="text" name="name" id="name" class="input input1" placeholder="Your name">
                    <textarea name="description" id="description" class="input input2" cols="30" rows="10"
                        placeholder="Your insight"></textarea>
                    <button id=${id} type="submit" class="submit-comment input">Comment</button>
                </form>
            </div>
        </div>
    </div>
  </div>`;
};

export default showPop;