//Taking localStorage datas
const userName = localStorage.getItem("name");
const userEmail = localStorage.getItem("email");
const userGithub = localStorage.getItem("github");
const userImg = localStorage.getItem("previewImg");

//Taking the texts, so I can change with the datas
const titleName = document.querySelector('.user-name-text');
const titleEmail = document.querySelector('.title-email');
const ticketName = document.querySelector('.user-name');
const ticketGitHub = document.querySelector('.github-id');
const ticketDate = document.querySelector('.today-date')
const ticketPfp = document.querySelector('.user-picture');

//Taking the date of the day
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

//Changing the datas of the title
titleName.textContent = `${userName}`;
titleEmail.textContent = `${userEmail}`;
let dateName = "";

switch (month) {
    case 1:
        dateName = "Jan";
        break;
    case 2:
        dateName = "Feb";
        break;
    case 3:
        dateName = "March";
        break;
    case 4:
        dateName = "April";
        break;
    case 5:
        dateName = "May";
        break;
    case 6:
        dateName = "Jun";
        break;
    case 7:
        dateName = "Jul";
        break;
    case 8:
        dateName = "Aug";
        break;
    case 9:
        dateName = "Sep";
        break;
    case 10:
        dateName = "Oct";
        break;
    case 11:
        dateName = "Nov";
        break;
    case 12:
        dateName = "Dec";
        break;
}

//Changing the datas of the ticket
ticketName.textContent = `${userName}`;
ticketDate.textContent = `${dateName} ${day}, ${year}`;
ticketGitHub.textContent = `${userGithub}`;
