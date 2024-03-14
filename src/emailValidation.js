const email = document.querySelector('input[type="email"]');
const errorSpan = email.parentNode.querySelector(".error");

const validateEmail = function validateTypeAndLengthOfEmailAddress() {
  if (email.validity.typeMismatch) {
    email.classList.add("error-invalid");
    email.classList.remove("error-valid");
    errorSpan.textContent = "Please provide a valid email address";
  } else if (email.value.length < 6) {
    email.classList.add("error-invalid");
    email.classList.remove("error-valid");
    errorSpan.textContent = "Email must be at least 6 characters";
    if (email.value.length === 0) {
      errorSpan.textContent = "";
    }
  } else {
    errorSpan.textContent = "";
    email.classList.remove("error-invalid");
    email.classList.add("error-valid");
  }
};

const checkEmail = function checkForEmailInputInDocument(e) {
  if (email) {
    email.addEventListener("input", validateEmail);
  } else {
    console.log("no email input detect on document");
  }
};

export default checkEmail;
