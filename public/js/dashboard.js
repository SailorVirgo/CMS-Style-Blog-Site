const newPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  const deletePostHandler = async (event) => {
    if (event.target.classList.contains('delete-post')) {
      const id = event.target.closest('article').dataset.id;
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  const editPostHandler = async (event) => {
    if (event.target.classList.contains('edit-post')) {
      const article = event.target.closest('article');
      const id = article.dataset.id;
      const title = prompt('Enter new title:', article.querySelector('h3').textContent);
      const content = prompt('Enter new content:', article.querySelector('p').textContent);
  
      if (title && content) {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to update post');
        }
      }
    }
  };
  
  document.querySelector('#new-post-form').addEventListener('submit', newPostFormHandler);
  document.querySelector('main').addEventListener('click', deletePostHandler);
  document.querySelector('main').addEventListener('click', editPostHandler);
  