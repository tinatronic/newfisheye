// DOM elements
const modal = document.getElementById("contact_modal");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector(".close-btn")
const formContact = document.getElementById("contact-form");
const formData = document.querySelectorAll(".form-data");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById('message');

// Listener that triggers the displayModal function
openBtn.addEventListener("click", displayModal);

openBtn.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        displayModal();
    }
});

// Opens the modal
function displayModal() {
    modal.style.display = "block";
    modal.focus();
    document.body.classList.add("no-scroll");
}
    
// Closes modal and resets form
function closeModal() {
    modal.style.display = "none";
    formContact.reset();
    document.body.classList.remove("no-scroll");
}

document.addEventListener("keydown", (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Validate form
document.querySelector("#submit").addEventListener("click", validateForm);

// Checks if conditions are met to validate form
function validateForm(event) {
    event.preventDefault();
    event.stopPropagation();
    const conditions = [
    validateFirstName(),
    validateLastName(),
    validateEmail(),
    validateMessage()
    ]
    if (conditions.filter((cond) => !cond).length) {
        return false;
    }
    returnInputValue();
    closeModal();
}
    
// Regex for fist name, last name & email inputs
const nameRegex = /^[A-zÀ-ÿ]{2,25}$/;
const emailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
    
// Checks if first name input is valid
function validateFirstName() {
    const parent = firstName.parentNode;

    if (firstName.value == "" || !nameRegex.test(firstName.value)) {
        parent.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
        parent.setAttribute("data-error-visible", "true");
        return false;
    }
        
    parent.setAttribute("data-error-visible", "false");
    return true;
}
    
// Checks if last name input is valid
function validateLastName() {
    const parent = lastName.parentNode;
        
    if (lastName.value == "" || !nameRegex.test(lastName.value)) {
        parent.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
        parent.setAttribute("data-error-visible", "true");
        return false;
    }
        
    parent.setAttribute("data-error-visible", "false");
    return true;
}
    
// Checks if email input is valid
function validateEmail() {
    const parent = document.getElementById("email").parentNode;
        
    if (email.value == "" || !emailRegex.test(email.value)) {
        parent.setAttribute("data-error", "Veuillez saisir une adresse e-mail valide.");
        parent.setAttribute("data-error-visible", "true");
        return false;
    }
    parent.setAttribute("data-error-visible", "false");
    return true;
}

// Checks if message input is valid
function validateMessage() {
    const parent = document.getElementById('message').parentNode;

    if (message.value == "") {
        parent.setAttribute("data-error", "Ce champ ne peut pas être vide.");
        parent.setAttribute("data-error-visible", "true");
        return false;
    }
    parent.setAttribute("data-error-visible", "false");
    return true;
}

// Gets and onsole.logs the value of the inputs
function returnInputValue() {
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const messageValue = message.value;

    console.log("First name :", firstNameValue);
    console.log("Last name :", lastNameValue);
    console.log("Email :", emailValue);
    console.log("Message :", messageValue);
}