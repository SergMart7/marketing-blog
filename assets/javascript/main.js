document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('blog-form');
    const errorMessage = document.getElementById('error-message');

        // FUNCTION THAT COLLECTS ALL INPUT DATA

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const title = document.getElementById('title').value.trim();
        const content = document.getElementById('content').value.trim();

        if (!username || !title || !content) {
            errorMessage.textContent = "All fields are required!";
            return;
        }

        // SETS INPUT DATA IN LOCAL STORAGE

        const blogPost = { username, title, content };
        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push(blogPost);
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        window.location.href = 'blog.html';
    });

        // FUNCIONS THAT HANDLE DARK THEME 

    const toggleButton = document.getElementById('toggle-theme');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = 'Light Mode';
    }

        //  KEEPS PREVIOUS THEME IN LOCAL STORAGE SO USER DOESN'T HAVE TO CONSTANTLY CHANGE

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    });
});
