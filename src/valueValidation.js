const inputs = document.querySelectorAll("input");

const checkValue = function checkForInputValue() {
  inputs.forEach((input) => {
    if (input.validity.valueMissing) {
      input.parentNode.querySelector(".error").textContent =
        "This field is required!";
    }
  });
};

export default checkValue;
