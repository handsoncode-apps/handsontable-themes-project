export function drawCheckboxInRowHeaders(row, TH) {
  const input = document.createElement("input");
  const inputConeteiner = document.createElement("label")
  const inputCheckMark = document.createElement("span")
  inputConeteiner.className = "hotCheckbox";
  input.type = "checkbox";

  if (row >= 0 && this.getDataAtRowProp(row, "0")) {
    input.checked = false;
  }
  Handsontable.dom.empty(TH);
  TH.appendChild(inputConeteiner).appendChild(input);
  TH.appendChild(inputConeteiner).appendChild(inputCheckMark);
}
