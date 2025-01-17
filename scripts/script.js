/* Error Messages */
const erroInvalidInfos = document.querySelector('.error-message'); //Englobe all erro message - for general use
const uploadErro = document.querySelector('.upload-erro');
const uploadAdvice = document.querySelector('.upload-advice');
const nameErroAlert = document.querySelector('.name-error');
const nameAlert = document.querySelector('.name-advice');
const emailErroAlert = document.querySelector('.email-error');
const githubErroAlert = document.querySelector('.github-error');
const githubAlert = document.querySelector('.github-alert');

/* Inputs */
const uploadInput = document.querySelector('#upload-input');
const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const githubInput = document.querySelector('#github-input');
const submitBtn = document.querySelector('#submit-btn');
const fileInfo = document.querySelector('.type-files');

/* Upload Changes*/
const uploadedOptions = document.querySelector('.upload-buttons-div');
const dragAndDropCaption = document.querySelector('.subtitle-upload-content');
const uploadLogo = document.querySelector('.upload-logo');
const removeImg = document.querySelector('.remove-img');
const changeImg = document.querySelector('.change-img');



/* Removing the alerts */
uploadInput.addEventListener('click', () => {
    uploadErro.style.display = 'none';
    fileInfo.style.display = 'flex';
});

nameInput.addEventListener('click', () => {
    nameErroAlert.style.display = 'none'
});

emailInput.addEventListener('click', () => {
    emailErroAlert.style.display = 'none'
});

githubInput.addEventListener('click', () => {
    githubErroAlert.style.display = 'none'

});


/* UPLOAD VERIFICATOR */
uploadInput.addEventListener("change", function () {
    const file = this.files[0];
    const maxSize = 500 * 1024;

    if (file) {
        const allowedTypes = ["image/jpeg", "image/png"];
        if (!allowedTypes.includes(file.type)) {
            fileInfo.style.display = 'none';
            uploadErro.style.display = 'flex';
            this.value = ""; //Reset the input
        }
    }

    if (file && file.size > maxSize) {
        fileInfo.style.display = 'none';
        uploadErro.style.display = 'flex';
        uploadAdvice.textContent = 'File too large. Please upload a photo under 500KB.';
    } else {
        uploadedOptions.style.display = 'flex';
        dragAndDropCaption.style.display = 'none';
    }

    /* TO DO: CHANGE THE UPLOAD LOGO TO THE FILE  */

});

/* Array of verification */
const numberVerificator = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//When the Submit button is clicked
submitBtn.addEventListener('click', () => {


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
    } else if (!githubInput.value.includes("@")) {
        githubErroAlert.style.display = 'flex';
        githubAlert.textContent = 'Please enter a valid GiuHub profile (missing "@" in the beginning)';
    }


    /* window.location.href = "./pages/ticketGenerated.html"; */
});


