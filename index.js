var ans = 0;
var newInput = "";
var currOperand = "+";
var isDecimal = false;

const inputElement = document.getElementById("input");

function pressNum(num) {
  inputElement.value += num;
  newInput += num;
}

function pressDot() {
  newInput += ".";
  inputElement.value += ".";
  isDecimal = true;
}

function operation(operand) {
  if (inputElement.value == "") {
    if (operand == "-") {
      newInput += "-";
      inputElement.value += "-";
    }
  } else {
    if (currOperand == "+") {
      ans += convertToNumbers(newInput);
    } else if (currOperand == "-") {
      ans -= convertToNumbers(newInput);
    } else if (currOperand == "*") {
      ans *= convertToNumbers(newInput);
    } else {
      ans /= convertToNumbers(newInput);
    }
    newInput = "";
    currOperand = operand;
    inputElement.value = null;
  }
}

function finalAns() {
  operation(currOperand);
  inputElement.value = ans;
  newInput = "";
}

function clr() {
  inputElement.value = null;
  ans = 0;
  newInput = "";
  currOperand = "+";
  isDecimal = false;
}

function convertToNumbers(stringOfnumbers) {
  if (isDecimal) {
    return parseFloat(stringOfnumbers);
  } else {
    return parseInt(stringOfnumbers);
  }
}
