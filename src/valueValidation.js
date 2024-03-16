const inputs = document.querySelectorAll("input");

let isValid = false;

const checkValue = function checkForInputValue() {
  inputs.forEach((input) => {
    if (input.validity.valueMissing) {
      // eslint-disable-next-line no-param-reassign
      input.parentNode.querySelector(".error").textContent =
        "This field is required!";
      isValid = false;
    } else {
      isValid = true;
    }
  });
  return isValid;
};

export default checkValue;
