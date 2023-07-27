// DOM elements
const modal = document.getElementById("contact_modal");
//const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn")
const formContact = document.getElementById("contact-form");
const formData = document.querySelectorAll(".form-data");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");


// Opens the modal
function displayModal() {
    modal.style.display = "block";
    modal.focus();
}
    
// Closes modal and resets form
function closeModal() {
    modal.style.display = "none";
    formContact.reset();
        
    // Allows to close modal with 'Escape' key -- NOT WORKING --
    document.addEventListener("keydown", function (event) {
        if (event.key == 27) {
            console.log("Close the modal")
            closeModal();
        }
    });
}

// Checks if conditions are met to validate form
function validateForm(event) {
    event.preventDefault();
    event.stopPropagation();
    const conditions = [
    validateFirstName(),
    validateLastName(),
    validateEmail()
    ]
    if (conditions.filter((cond) => !cond).length) {
        return false;
    }
}
    
// Regex for fist name, last name & email inputs
const nameRegex = /^[A-zÀ-ÿ]{2,25}$/;
const emailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
    
// Checks if first name input is valid
function validateFirstName() {
    //const regexFirstName = /^[A-zÀ-ÿ]{2,25}$/;
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
    //const regexLastName = /^[A-zÀ-ÿ]{2,25}$/;
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
    //const regexEmail =
    ///^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
    const parent = document.getElementById("email").parentNode;
        
    if (email.value == "" || !emailRegex.test(email.value)) {
        parent.setAttribute("data-error", "Veuillez saisir une adresse e-mail valide.");
        parent.setAttribute("data-error-visible", "true");
        return false;
    }
    parent.setAttribute("data-error-visible", "false");
    return true;
}