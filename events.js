// Function to add a new post
function addPost() {
    const postInput = document.getElementById('post-input');
    const postContent = postInput.value.trim();
    
    if (postContent !== '') {
      const postsContainer = document.getElementById('posts-container');
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <div class="post-content">
          <p>${postContent}</p>
        </div>
        <div class="comment-box">
          <textarea placeholder="Write a comment..."></textarea>
          <button onclick="addComment(this)">Comment</button>
        </div>
        <div class="comments-container">
          <!-- Comments will be dynamically added here -->
        </div>
      `;
      
      postsContainer.prepend(postElement);
      postInput.value = '';
    }
  }
  
  // Function to add a new comment
  function addComment(button) {
    const commentInput = button.parentElement.querySelector('textarea');
    const commentContent = commentInput.value.trim();
    
    if (commentContent !== '') {
      const commentsContainer = button.parentElement.nextElementSibling;
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.innerHTML = `
        <p>${commentContent}</p>
        <div class="reply-box">
          <textarea placeholder="Write a reply..."></textarea>
          <button onclick="addReply(this)">Reply</button>
        </div>
        <div class="replies-container">
          <!-- Replies will be dynamically added here -->
        </div>
      `;
      
      commentsContainer.appendChild(commentElement);
      commentInput.value = '';
    }
  }
  
  // Function to add a new reply
  function addReply(button) {
    const replyInput = button.parentElement.querySelector('textarea');
    const replyContent = replyInput.value.trim();
    
    if (replyContent !== '') {
      const repliesContainer = button.parentElement.nextElementSibling;
      const replyElement = document.createElement('div');
      replyElement.classList.add('comment');
      replyElement.innerHTML = `
        <p>${replyContent}</p>
      `;
      
      repliesContainer.appendChild(replyElement);
      replyInput.value = '';
    }
  }
  