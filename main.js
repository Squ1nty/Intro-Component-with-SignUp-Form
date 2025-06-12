let signUpForm = document.getElementById("signUpForm");

let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");
let emailAddressInput = document.getElementById("emailAddressInput");
let passwordInput = document.getElementById("passwordInput");

let firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
let lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
let emailAddressErrorMsg = document.getElementById("emailAddressErrorMsg");
let passwordErrorMsg = document.getElementById("passwordErrorMsg");

let firstNameSVG = document.getElementById("firstNameSVG");
let lastNameSVG = document.getElementById("lastNameSVG");
let emailAddressSVG = document.getElementById("emailAddressSVG");
let passwordSVG = document.getElementById("passwordSVG");

function isEmpty(){
  let counter = 0;

  if(firstNameInput.value == null || firstNameInput.value == ""){
    firstNameInput.classList.add("invalid");
    firstNameSVG.classList.add("active");
    firstNameErrorMsg.textContent = "First Name cannot be empty";
    counter++;
  }
  if(lastNameInput.value == null || lastNameInput.value == ""){
    lastNameInput.classList.add("invalid");
    lastNameSVG.classList.add("active");
    lastNameErrorMsg.textContent = "Last Name cannot be empty";
    counter++;
  }
  if(emailAddressInput.value == null || emailAddressInput.value == ""){
    emailAddressInput.classList.add("invalid");
    emailAddressSVG.classList.add("active");
    emailAddressErrorMsg.textContent = "Email Address cannot be empty";
    counter++;
  }
  if(passwordInput.value == null || passwordInput.value == ""){
    passwordInput.classList.add("invalid");
    passwordSVG.classList.add("active");
    passwordErrorMsg.textContent = "Password cannot be empty";
    counter++;
  }

  if(counter == 0){
    return false;
  }
  else if(counter > 0){
    return true;
  }
}
function notEmail(){
  if(!emailAddressInput.checkValidity()){
    if(emailAddressInput.validity.typeMismatch){
      emailAddressInput.classList.add("invalid");
      emailAddressSVG.classList.add("active");
      emailAddressErrorMsg.textContent = "Looks like this is not an email";
      return true;
    }
  }
  else{
    return false;
  }
}

signUpForm.addEventListener("submit", (e) =>{
  e.preventDefault();

  firstNameErrorMsg.textContent = "";
  lastNameErrorMsg.textContent = "";
  emailAddressErrorMsg.textContent = "";
  passwordErrorMsg.textContent = "";

  firstNameInput.classList.remove("invalid");
  lastNameInput.classList.remove("invalid");
  emailAddressInput.classList.remove("invalid");
  passwordInput.classList.remove("invalid");

  firstNameInput.classList.remove("valid");
  lastNameInput.classList.remove("valid");
  emailAddressInput.classList.remove("valid");
  passwordInput.classList.remove("valid");

  firstNameSVG.classList.remove("active");
  lastNameSVG.classList.remove("active");
  emailAddressSVG.classList.remove("active");
  passwordSVG.classList.remove("active");

  if(isEmpty()){
    return;
  }
  if(notEmail()){
    return;
  }

  firstNameInput.classList.add("valid");
  lastNameInput.classList.add("valid");
  emailAddressInput.classList.add("valid");
  passwordInput.classList.add("valid");
});
