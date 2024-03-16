import zipValidation from "./zipValidation";

const select = document.querySelector("#country");

const selectListener = function listeningForChangeOnSelectInputToRunZipValidation() {
  zipValidation(event, select.value);
};

select.addEventListener("change", selectListener);

export { selectListener, select };
