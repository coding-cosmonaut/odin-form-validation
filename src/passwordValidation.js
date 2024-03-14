const password = document.querySelector("#password");
const errorSpan = password.parentNode.querySelector(".error");

const passwordCheck = function passwordValidationCheck() {
  const testingRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (password.value === "") return;
  if (!testingRegex.test(password.value)) {
    errorSpan.textContent =
      "Password must include: one upper case letter, one lower case letter, one number, one special character and minimum 8 characters.";
  } else {
    errorSpan.textContent = "";
  }
};

password.addEventListener("input", passwordCheck);

export default passwordCheck;
