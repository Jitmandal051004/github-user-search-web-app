// import config from './config.js';

const header = document.querySelector('header');
const inputDiv = document.querySelector('.inputDiv');
const inputUserName = inputDiv.querySelector('#inputUserName')
const btn = document.querySelector('.Btn');
const errorState = document.querySelector('.errorState')
const userBox = document.querySelector('.userBox');
const DesktopPic = userBox.querySelector('.Desktop.Pic');
const MobilePic = userBox.querySelector('.Mobile.Pic');
const name = userBox.querySelector('#Name');
const userName = userBox.querySelector('#userName');
const joinDate = userBox.querySelector('#date');
const bio = userBox.querySelector('.bio');
const repoNum = userBox.querySelector('#RepoNo');
const followerNum = userBox.querySelector('#FollowersNo');
const followingNum = userBox.querySelector('#FollowingNo');
const locationName = userBox.querySelector('.locName');
const twitterHandle =  userBox.querySelector('.TwitHandle');
const website = userBox.querySelector('.websiteLink');
const compName = userBox.querySelector('.CompName');

// const accessToken = config.accessToken;

//grabbing the username from input div and using api to find info about it
btn.addEventListener('click', fetchData);
inputUserName.addEventListener('keydown',(event) => {
    if(event.key === 'Enter'){
        fetchData();
    }
})

//fetching function
function fetchData() {
    const gitUserName = inputUserName.value
    console.log(gitUserName)

    fetch(`https://api.github.com/users/${gitUserName}`)//, {
    //     header: {
    //         Authorization: `Bearer ${accessToken}`
    //     }
    // })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            DesktopPic.src = data.avatar_url;
            MobilePic.src = data.avatar_url;
            name.textContent = data.name;
            userName.textContent = `@${data.login}`;
            joinDate.textContent = formatDate(data.created_at);
            if(data.bio){
                bio.textContent = data.bio;
                bio.style.opacity = '0.8';
            }
            repoNum.textContent = data.public_repos;
            followerNum.textContent = data.followers;
            followingNum.textContent = data.following;
            if(data.location){
                locationName.textContent = data.location;
                locationName.style.opacity = '1';
            }
            if(data.twitter_username){
                twitterHandle.textContent = data.twitter_username;
                twitterHandle.href = `https://twitter.com/${data.twitter_username}`;
                twitterHandle.style.opacity = '1';
            }
            if(data.blog){
                website.href = data.blog;
                website.style.opacity = '1';

                //getting the domain name
                const urlBlog = new URL(data.blog);
                website.textContent = urlBlog.hostname;
            }
            if(data.company){
                compName.textContent = data.company;
                compName.style.opacity = '1';
            }

            userBox.style.animation = 'slideIn 2000ms';
            header.style.animation = 'goUp 2000ms';
            inputDiv.style.animation = 'goUp 2000ms ';
            userBox.style.display = 'flex';
        })
        .catch(error => {
            userBox.style.display = 'none';
            errorState.style.display = 'flex';
            errorState.style.animation = 'errorMotion 80ms linear 6 alternate ';
            header.style.animation = 'errorMotion 80ms linear 6 alternate';
            inputDiv.style.animation = 'errorMotion 80ms linear 6 alternate';

            setTimeout(() => {
                location.reload();
            }, 2000);
        })
}

//getting the date in correct format
function formatDate(createdAt){
    let dateRaw = createdAt.slice(0,10);

    const dateParts = dateRaw.split('-');
    const day = dateParts[2];
    const monthNum = parseInt(dateParts[1],10);
    const year = dateParts[0];

    const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const month = monthName[monthNum - 1];

    const date = `${day} ${month} ${year}`
    return date;
}
