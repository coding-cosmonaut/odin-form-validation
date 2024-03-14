import { password } from "./passwordValidation";

const passwordConfirm = document.querySelector("#confirm-password");
const errorSpan = passwordConfirm.parentNode.querySelector(".error");

const confirm = function confirmPassword() {
  if (passwordConfirm.value.length === 0) return;
  if (password.value !== passwordConfirm.value) {
    errorSpan.textContent = "Passwords do not match";
    passwordConfirm.classList.add("error-invalid");
    passwordConfirm.classList.remove("error-valid");
  } else {
    errorSpan.textContent = "";
    passwordConfirm.classList.remove("error-invalid");
    passwordConfirm.classList.add("error-valid");
  }
};

passwordConfirm.addEventListener("input", confirm);

export default confirm;
