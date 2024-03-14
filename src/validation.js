import checkEmail from "./emailValidation";
import checkCountry from "./countryValidation";
import checkValue from "./valueValidation";
import zipValidation from "./zipValidation";
import passwordCheck from "./passwordValidation";

const form = document.querySelector("form");

const validation = function addSubmitEventToForm(e) {
  if (e.type === "submit") {
    if (!form.checkValidity()) {
      e.preventDefault();
      if (checkValue()) {
        console.log("in if");
        checkEmail();
        // checkCountry();
      }
    }
  } else {
    checkEmail();
    checkCountry();
    zipValidation();
    passwordCheck()
  }
};

form.addEventListener("submit", validation);

export default validation;
