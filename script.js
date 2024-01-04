const header = document.querySelector('header');
const inputDiv = document.querySelector('.inputDiv');
const userName = inputDiv.querySelector('#inputUserName')
const btn = document.querySelector('.Btn');
const userBox = document.querySelector('.userBox');

//sliding animation for user card
btn.addEventListener('click', () => {
    userBox.style.animation = 'slideIn 2000ms';
    header.style.animation = 'goUp 2000ms';
    inputDiv.style.animation = 'goUp 2000ms ';
    userBox.style.display = 'flex';
});

let gitUserName;
const accessToken = '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';
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
        })

        // nameUser =  data.name;
        // console.log(nameUser);
})

