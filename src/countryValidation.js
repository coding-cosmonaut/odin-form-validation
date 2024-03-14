import zipValidation from "./zipValidation";

const select = document.querySelector("#country");
const errorSpan = select.parentNode.querySelector(".error");

const countryCheck = function generalValidityCheck() {
  zipValidation(event, select.value);
};

const checkCountry = function checkForSelectElement() {
  if (select) {
    select.addEventListener("change", countryCheck);
  }
};

export default checkCountry;
