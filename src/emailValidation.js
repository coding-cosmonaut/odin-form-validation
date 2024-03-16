const email = document.querySelector('input[type="email"]');
const errorSpan = email.parentNode.querySelector(".error");

let isValid = false;

const validateEmail = function validateTypeAndLengthOfEmailAddress() {
  if (email.value.length === 0) return;
  if (email.validity.typeMismatch) {
    email.classList.add("error-invalid");
    email.classList.remove("error-valid");
    errorSpan.textContent = "Please provide a valid email address";
    isValid = false;
  } else if (email.value.length < 6) {
    email.classList.add("error-invalid");
    email.classList.remove("error-valid");
    errorSpan.textContent = "Email must be at least 6 characters";
    if (email.value.length === 0) {
      errorSpan.textContent = "";
    }
    isValid = false;
  } else {
    errorSpan.textContent = "";
    email.classList.remove("error-invalid");
    email.classList.add("error-valid");
    isValid = true;
  }
  return isValid;
};

email.addEventListener("input", validateEmail);

export default validateEmail;
