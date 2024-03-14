import constraints from "./constraints";

const zip = document.querySelector('input[name="zip"]');
const errorSpan = zip.parentNode.querySelector(".error");
const selectedCountry = document.querySelector("#country");

const zipValidation = function zipPostalCodeValidation(
  event,
  country = selectedCountry.value
) {
  const constraint = constraints[country][0];
  if (country === "us") {
    if (zip.value.length === 0) return;
    zip.setAttribute("placeholder", "EX: 90210 or 99577-0727");
    if (!constraint.test(zip.value)) {
      // eslint-disable-next-line prefer-destructuring
      errorSpan.textContent = constraints[country][1];
      zip.classList.add("error-invalid");
      zip.classList.remove("error-valid");
    } else {
      errorSpan.textContent = "";
      zip.classList.add("error-valid");
      zip.classList.remove("error-invalid");
    }
  } else if (country === "fr" || country === "de") {
    zip.setAttribute("placeholder", "EX: 90210");
    if (!constraint.test(zip.value)) {
      // eslint-disable-next-line prefer-destructuring
      errorSpan.textContent = constraints[country][1];
      zip.classList.add("error-invalid");
      zip.classList.remove("error-valid");
    } else {
      errorSpan.textContent = "";
      zip.classList.add("error-valid");
      zip.classList.remove("error-invalid");
    }
  } else if (country === "rs") {
    zip.setAttribute("placeholder", "EX: 348-139");
    if (!constraint.test(zip.value)) {
      // eslint-disable-next-line prefer-destructuring
      errorSpan.textContent = constraints[country][1];
      zip.classList.add("error-invalid");
      zip.classList.remove("error-valid");
    } else {
      errorSpan.textContent = "";
      zip.classList.add("error-valid");
      zip.classList.remove("error-invalid");
    }
  } else {
    console.log("error");
  }
};

zip.addEventListener("input", zipValidation);

export default zipValidation;
