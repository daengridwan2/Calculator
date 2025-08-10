// Ambil semua element
const inputDisplay = document.getElementById("display");
const buttons = document.querySelectorAll("button");

//variable untuk menampung nilai yang di input user
let currentInput = "";
let previousInput = "";
let operator = "";
let result = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.textContent;
    // untuk mereset semua variable
    if (button.classList.contains("clear")) {
      currentInput = "";
      previousInput = "";
      operator = "";
      result = false;
      inputDisplay.value = "";
      return;
    }

    if (button.classList.contains("operator")) {
      if (currentInput === "") return;
      if (previousInput != "") {
        previousInput.eval(previousInput + operator + currentInput).toString();
      } else {
        previousInput = currentInput;
      }
      operator = value;
      currentInput = "";
      inputDisplay.value = previousInput + "" + operator;
      return;
    }

    // To
    if (button.classList.contains("match")) {
      if (previousInput === "" || operator === "" || currentInput === "")
        return;
      const allResult = eval(previousInput + operator + currentInput);
      inputDisplay.value = allResult;
      currentInput = allResult.toString();
      previousInput = "";
      operator = "";
      result = true;
      return;
    }
    if (result) {
      currentInput = "";
      result = false;
    }
    if (value === "." && currentInput.includes(".")) return;
    currentInput += value;
    inputDisplay.value = previousInput + operator + currentInput;
  });
});
