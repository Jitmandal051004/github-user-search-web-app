const header = document.querySelector('header');
const inputDiv = document.querySelector('.inputDiv');
const btn = document.querySelector('.Btn');
const userBox = document.querySelector('.userBox');

btn.addEventListener('click', () => {
    userBox.style.display = 'flex';
    userBox.style.animation = 'slideIn 1000ms ease-out';
    header.style.animation = 'goUp 1000ms ease-out';
    inputDiv.style.animation = 'goUp 1000ms ease-out';
});
