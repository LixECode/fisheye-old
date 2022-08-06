function displayModal() {
    const modal = document.getElementById("contact-modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact-modal");
    modal.style.display = "none";
}


const firstName = document.querySelector("#first"); //input firstname
const lastName = document.querySelector("#last"); //input lastname
const email = document.querySelector("#email"); //input email
const message = document.querySelector("#message"); //input message
const modalSubmit = document.querySelector(".contact-button"); //modal submit button


function InsertName() {
    const InsertName = document.querySelector('.header-form');
    InsertName.createElement('p');
    p.textContent = 'blaaaaa';
    InsertName.appendChild(p);
}

// function /firstname
function checkFirstName(firstName) {
    const regText = /[a-zA-ZÀ-ÿ]{2,}/;
    if (regText.test(firstName.value)) {
        firstName.parentNode.dataset.errorVisible = false;
        return true
    } else {
        firstName.parentNode.dataset.error = "Le prénom doit avoir 2 caractères ou plus";
        firstName.parentNode.dataset.errorVisible = true;
        return false
    }
};

// event /firstname
firstName.addEventListener('blur', function () {
    checkFirstName(firstName);
});

// function /lastName
function checkLastName(lastName) {
    const regText = /[a-zA-ZÀ-ÿ]{2,}/;
    if (regText.test(lastName.value)) {
        lastName.parentNode.dataset.errorVisible = false;
        return true
    } else {
        lastName.parentNode.dataset.error = "Le nom doit avoir 2 caractères ou plus";
        lastName.parentNode.dataset.errorVisible = true;
        return false
    }
};

// event /lastname
lastName.addEventListener('blur', function () {
    checkLastName(lastName);
});

// function /email
function checkEmail(email) {
    const regEmail = /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
    if (regEmail.test(email.value)) {
        email.parentNode.dataset.errorVisible = false;
        return true
    } else {
        email.parentNode.dataset.error = "Veuillez entrer un email valide";
        email.parentNode.dataset.errorVisible = true;
        return false
    }
};

// event /email
email.addEventListener('blur', function () {
    checkEmail(email);
});

// function /message
function checkMessage(message) {
    const regMessage = /^[\w\-\+]/;
    if (regMessage.test(message.value)) {
        message.parentNode.dataset.errorVisible = false;
        return true
    } else {
        message.parentNode.dataset.error = "Veuillez entrer un message valide";
        message.parentNode.dataset.errorVisible = true;
        return false
    }
};

// event /message
message.addEventListener('blur', function () {
    checkMessage(message);
});

// VALIDATION

// function /submit
function validateModalSubmit() {
    // check of each function input of the form
    if (checkFirstName(firstName) && checkLastName(lastName) && checkEmail(email) &&
        checkMessage(message)) {
        // display none the modal
        closeModal()
        // launch new modal
        console.log(validateModalSubmit())
    } else {
        // else show all errorVisible of each else functions
        checkFirstName(firstName);
        checkLastName(lastName);
        checkEmail(email);
        checkMessage(message);
    }
};

// event /submit
modalSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    validateModalSubmit();
});