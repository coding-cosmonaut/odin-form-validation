const password = document.querySelector("#password");
const errorSpan = password.parentNode.querySelector(".error");

const passwordCheck = function passwordValidationCheck() {
  const testingRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (password.value === "") return;
  if (!testingRegex.test(password.value)) {
    errorSpan.innerHTML = `Password must include: one upper case letter, </br> one lower case letter, one number, </br> one special character and minimum 8 characters.`;
    // errorSpan.style.bottom = `${(errorSpan.textContent === "This field is required!" ? "-20%" : "-60%")}`;
    errorSpan.style.bottom = "-60%";
    password.classList.add("error-invalid");
    password.classList.remove("error-valid");
  } else {
    errorSpan.textContent = "";
    password.classList.remove("error-invalid");
    password.classList.add("error-valid");
  }
};

password.addEventListener("input", passwordCheck);

export { passwordCheck, password };
