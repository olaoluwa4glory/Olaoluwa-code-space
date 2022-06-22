// Decleration of Variables
const errorMessage = document.getElementById('errorMessage')
const emailReq = document.getElementById('emailRe')
const passwordReq = document.getElementById('passwordRe')
const loginBtn = document.getElementById('loginReq')
const checkbox = document.getElementById('exampleCheck1')


// Adding an Event listener for the login button
loginBtn.addEventListener('click', validationForm)


// creating a function for form validation
function validationForm(e) {
    // Process of preventing default submit action
    e.preventDefault();


    // creating an array of errormessages
    let message = []

    if (emailReq.value === '') {
        message.push(" Please fill in your details")
    }

    if (passwordReq.value === '') {
        message.push()
    }

    if (passwordReq.value.length < 8) {
        message.push("Password must be at least 8 characters")
        window.location = 'https://cbtsignin.netlify.app/'
    }    

    if (message.length > 0) {
        errorMessage.innerText = message.join(',')
    }

    if (checkbox.checked === true) {
        // alert('Welcome home')
    }

    if (checkbox.checked === false) {
        alert('Please tick the checkbox')
        // window.location = 'C:\Users\HyelNet\Desktop\webclass\JSProject\CBT SIGN IN\signIn.html'
    } else {
        window.location = 'https://cbtquest.netlify.app/'
    }
    if (passwordReq.value.length < 8) {
        alert('Please correct your password, at least 8 characters')
        window.location = 'https://cbtsignin.netlify.app/'
    }
}

// creating a function for Email validation
function ValidateEmail(emailRe) {

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailRe.value.match(validRegex)) {

        // alert("Valid email address!");

        emailRe.focus();

        return true;

    } else {

        alert("Invalid email address!");
        window.location = 'https://cbtsignin.netlify.app/'


        emailRe.focus();

        return false;

    }
}