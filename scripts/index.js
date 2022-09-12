const addComment = (event) => {
    event.preventDefault();
    let commentText = document.getElementById('comment-input').value;
    let html = `
        <div class="comment-grid1">
            <img id="comment-img" src="images/1.jpeg" alt="">
        </div>
        <div class="comment-grid2">
            <h4 id="user-name">Pablo</h4>
            <span>‧ 45 min ago</span>
        </div>
        <div class="comment-grid3">
            <p id="comment-body">${commentText}</p>
        </div>
        <div class="comment-grid4">
            <a href="" id="upvote">▲ Upvote</a>
            <a href="" id="reply">Reply</a>
        </div>
    `;
    let newComment = document.createElement('div');
    newComment.classList.add('comment-grid');
    newComment.innerHTML = html;

    let commentSection = document.getElementById('comment-section');
    commentSection.appendChild(newComment);
}


document.getElementById("add-comment").addEventListener("submit",addComment);
