import config from './config.js';

const header = document.querySelector('header');
const inputDiv = document.querySelector('.inputDiv');
const userName = inputDiv.querySelector('#inputUserName')
const btn = document.querySelector('.Btn');
const userBox = document.querySelector('.userBox');
const DesktopPic = userBox.querySelector('.Desktop.Pic');
const MobilePic = userBox.querySelector('.Mobile.Pic');

//sliding animation for user card
btn.addEventListener('click', () => {
    userBox.style.animation = 'slideIn 2000ms';
    header.style.animation = 'goUp 2000ms';
    inputDiv.style.animation = 'goUp 2000ms ';
    userBox.style.display = 'flex';
});

let gitUserName;
const accessToken = config.accessToken;
const nameUser = '';

//grabbing the username from input div and using api to find info about it
btn.addEventListener('click', () => {
    gitUserName = userName.value
    console.log(gitUserName)

    fetch(`https://api.github.com/users/${gitUserName}`, {
        header: {
            Authorization: `Bearer ${accessToken}`
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            DesktopPic.src = data.avatar_url;
            MobilePic.src = data.avatar_url;
        })
    })

// avatar_url
// bio
// blog
// company
// created_at
// email
// followers
// following
// following_url
// html_url
// location
// login
// name
// organizations_url
// public_gists
// public_repos
// twitter
