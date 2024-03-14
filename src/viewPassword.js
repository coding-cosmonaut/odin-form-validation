const button = document.querySelectorAll(".view-password");

const viewPassword = function changeTypeOfTheInputElementFromPasswordToText() {
  if (this.previousElementSibling.type === "password") {
    this.previousElementSibling.type = "text";
  } else {
    this.previousElementSibling.type = "password";
  }
};

export { viewPassword, button };
