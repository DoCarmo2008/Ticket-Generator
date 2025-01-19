
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
const previewImg = document.querySelector('.upload-logo');
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


/* UPLOAD  VERIFICATION */
function selectingFile() {
    const file = uploadInput.files[0];
    const maxSize = 500 * 1024;

    if (file) {
        const allowedTypes = ["image/jpeg", "image/png"];
        if (!allowedTypes.includes(file.type)) {
            fileInfo.style.display = 'none';
            uploadErro.style.display = 'flex';
            uploadInput.value = ""; //Reset the input
            return;
        }


        if (file && file.size > maxSize) {
            fileInfo.style.display = 'none';
            uploadErro.style.display = 'flex';
            uploadAdvice.textContent = 'File too large. Please upload a photo under 500KB.';
            return;
        }

        // Change the upload logo to the selected image
        previewImg.classList.add("img-uploaded");
        const reader = new FileReader();
        reader.onload = function (e) {
            previewImg.src = e.target.result;
        };
        reader.readAsDataURL(file);
        uploadedOptions.style.display = 'flex';
        dragAndDropCaption.style.display = 'none';
    } else {
        previewImg.classList.remove("img-uploaded");
        previewImg.src = "assets/images/icon-upload.svg";

    }
};



/* DRAG AND DROP FUNCTIONS */
//Creating the events

/* TO DO: FINISH DRAG AND DROP FUNCTIONALITY*/
["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
    uploadInput.addEventListener(eventName, (e) => e.preventDefault());
});

// Highlight drop area on dragover
uploadInput.addEventListener("dragover", () => {
    dropArea.classList.add("highlight");
});

// Remove highlight on dragleave
uploadInput.addEventListener("dragleave", () => {
    dropArea.classList.remove("highlight");
});

// Handle file drop
uploadInput.addEventListener("drop", (e) => {
    const file = e.dataTransfer.files[0]; // Get the dropped file
    handleFile(file); // Process the file
});


// Button functionalities after uploading a file
changeImg.addEventListener("click", () => {
    uploadInput.value = ""; // Clear previous selection
    uploadInput.click(); // Open file selection
});

removeImg.addEventListener("click", () => {
    uploadInput.value = "";
    previewImg.classList.remove("img-uploaded");
    previewImg.src = "assets/images/icon-upload.svg";
    uploadedOptions.style.display = 'none';
    dragAndDropCaption.style.display = 'flex';
});



/* UPLOAD  APLICATION */
uploadInput.addEventListener("change", function () {
    selectingFile();
});


/* Array of verification */
const numberVerificator = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//When the Submit button is clicked
submitBtn.addEventListener('click', () => {
    /* UPLOAD LAST VERIFICATION */

    /* TO DO: FIX THIS - NOT WORKING PROPERLY */
    if(previewImg.src == "assets/images/icon-upload.svg") {
        uploadAdvice.textContent = 'A file must be uploaded';
        selectingFile();
    };

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


