// THEME SWITCHER

const themeSwitcher = document.querySelector('#theme');
const container = document.querySelector('.container');

// FORM ELEMENTS

const userName = document.querySelector('#userName');
const title = document.querySelector('#titleSquare');
const comment = document.querySelector('#msg');
const submitButton = document.querySelector('#submit');

// DEFAULT COLOUR IS LIGHT MODE

let mode = 'light';

themeSwitcher.addEventListener('click', function() {
    if (mode === 'light') {
        mode = 'dark';
        container.classList.remove('light');
        container.classList.add('dark');
    } else {
        mode = 'light';
        container.classList.remove('dark');
        container.classList.add('light');
    }
});

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    // CREATE A POST UPON OBJECT SUBMISSION

    const post = {
        user: userName.value.trim(),
        title: title.value.trim(),
        content: comment.value.trim(),
    };

    // SETS IN LOCAL STORAGE

    localStorage.setItem('post', JSON.stringify(post));

    // CLEARS THE FORM

    userName.value = '';
    title.value = '';
    comment.value = '';

    //  DISPLAY CONFIRMATION OF POST BEING SAVED :D

    alert('Post saved!');
});