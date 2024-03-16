import constraints from "./constraints";
import { select } from "./countryValidation";

const zip = document.querySelector('input[name="zip"]');
const errorSpan = zip.parentNode.querySelector(".error");

let isValid = false;

const change = function changePlaceholderTextInZipInputOnSelectChange(value) {
  if (value === "us") {
    // eslint-disable-next-line no-param-reassign
    value = "EX: 90210 or 99577-0727";
  } else if (value === "fr" || value === "de") {
    // eslint-disable-next-line no-param-reassign
    value = "EX: 90210";
  } else if (value === "rs") {
    // eslint-disable-next-line no-param-reassign
    value = "EX: 348-139";
  }
  return value;
};

const zipValidation = function zipPostalCodeValidation(
  event,
  country = select.value
) {
  const constraint = constraints[country][0];

  zip.setAttribute("placeholder", change(select.value));
  if (zip.value.length === 0) return;
  if (country === "us") {
    zip.setAttribute("placeholder", "EX: 90210 or 99577-0727");
    if (!constraint.test(zip.value)) {
      // eslint-disable-next-line prefer-destructuring
      errorSpan.textContent = constraints[country][1];
      zip.classList.add("error-invalid");
      zip.classList.remove("error-valid");
      isValid = false;
    } else {
      errorSpan.textContent = "";
      zip.classList.add("error-valid");
      zip.classList.remove("error-invalid");
      isValid = true;
    }
  } else if (country === "fr" || country === "de") {
    zip.setAttribute("placeholder", "EX: 90210");
    if (!constraint.test(zip.value)) {
      // eslint-disable-next-line prefer-destructuring
      errorSpan.textContent = constraints[country][1];
      zip.classList.add("error-invalid");
      zip.classList.remove("error-valid");
      isValid = false;
    } else {
      errorSpan.textContent = "";
      zip.classList.add("error-valid");
      zip.classList.remove("error-invalid");
      isValid = true;
    }
  } else if (country === "rs") {
    zip.setAttribute("placeholder", "EX: 348-139");
    if (!constraint.test(zip.value)) {
      // eslint-disable-next-line prefer-destructuring
      errorSpan.textContent = constraints[country][1];
      zip.classList.add("error-invalid");
      zip.classList.remove("error-valid");
      isValid = false;
    } else {
      errorSpan.textContent = "";
      zip.classList.add("error-valid");
      zip.classList.remove("error-invalid");
      isValid = true;
    }
  } else {
    console.log("error");
  }
  return isValid;
};

zip.addEventListener("input", zipValidation);

export default zipValidation;
