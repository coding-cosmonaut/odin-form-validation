import checkEmail from "./emailValidation";
import checkCountry from "./countryValidation";
import checkValue from "./valueValidation";
import zipValidation from "./zipValidation";
import { passwordCheck } from "./passwordValidation";
import confirm from "./confirmPassword";
import { viewPassword, button } from "./viewPassword";

const form = document.querySelector("form");
const svg = document.querySelector(".svg");

const validation = function addSubmitEventToForm(e) {
  if (e.type === "submit") {
    e.preventDefault();
    if (!form.checkValidity()) {
      checkValue();
    } else {
      svg.classList.add("success-svg");
    }
  } else {
    checkEmail();
    checkCountry();
    zipValidation();
    passwordCheck();
    confirm();
  }
};

form.addEventListener("submit", validation);
button.forEach((bttn) => bttn.addEventListener("click", viewPassword));

export default validation;
