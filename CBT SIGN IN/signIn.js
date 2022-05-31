// Decleration of Variables
const errorMessage = document.getElementById('errorMessage')
const emailReq = document.getElementById('emailRe')
const passwordReq = document.getElementById('passwordRe')
const loginBtn = document.getElementById('loginReq')


// Adding an Event listener for the login button
loginBtn.addEventListener('click' , validationForm )


// creating a function for form validation
function validationForm(e){
    // Process of preventing default submit action
    e.preventDefault();


// creating an array of errormessages
let message = []

if (emailReq.value === '') {
    message.push ("Please fill in your Email Address")
}

if (passwordReq.value === ''){
    message.push ("Password must be a numeric figure")
}

if (passwordReq.value.length < 8){
    message.push ("Password must be at least 8 characters")
}

if (message.length > 0){
    errorMessage.innerText = message.join(',')
}

else{
    window.location = 'file:///C:/Users/HyelNet/Desktop/webclass/JSProject/cbtExam.html'
}

if (message.length > 0){
    errorMessage.innerText = message.join(',')
}


}

// creating a function for email validation
function ValidateEmail(emailRe) {

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (emailRe.value.match(validRegex)) {
  
      alert("Valid email address!");
  
      emailRe.focus();
  
      return true;
  
    } 
    else {
  
      alert("Invalid email address!");
  
      emailRe.focus();
  
      return false;
  
    }
  
  }



