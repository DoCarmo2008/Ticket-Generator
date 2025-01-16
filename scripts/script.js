/* Error Messages */
const erroInvalidInfos = document.querySelector('.error-message'); //Englobe all erro message - for general use
const nameErroAlert = document.querySelector('.name-error');
const nameAlert = document.querySelector('.name-advice');
const emailErroAlert = document.querySelector('.email-error');
const githubErroAlert = document.querySelector('.github-error');
const githubAlert = document.querySelector('.github-alert');

/* Inputs */
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const githubInput = document.querySelector('#github-input');
const submitBtn = document.querySelector('#submit-btn');

/* Array of verification */
const numberVerificator = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

/* Removing the alerts */
nameInput.addEventListener('click', () => {
    nameErroAlert.style.display = 'none'
});

emailInput.addEventListener('click', () => {
    emailErroAlert.style.display = 'none'
});

githubInput.addEventListener('click', () => {
    githubErroAlert.style.display = 'none'

});

//When the Submit button is clicked
submitBtn.addEventListener('click', () => {
    /* UPLOAD VERIFICATOR */

    /* INPUTS VERIFICATORS */
    if (nameInput.value.length === 0) {
        nameErroAlert.style.display = 'flex';
        nameAlert.textContent = 'Name is a required information';
    } else {
        for (let num of numberVerificator) {
            if (nameInput.value.includes(num)) {
                nameErroAlert.style.display = 'flex';
                nameAlert.textContent = 'Name can not contain numbers'; 
                break; 
            }
        }
    }

    if (emailInput.value.length === 0) {
        emailErroAlert.style.display = 'flex';
    }

    if (githubInput.value.length === 0) {
        githubErroAlert.style.display = 'flex';
        githubAlert.textContent = 'Please enter a valid GiuHub profile';
    } else if(!githubInput.value.includes("@")) {
        githubErroAlert.style.display = 'flex';
        githubAlert.textContent = 'Please enter a valid GiuHub profile (missing "@" in the beginning)';
    }

    
    /* window.location.href = "./pages/ticketGenerated.html"; */
});


