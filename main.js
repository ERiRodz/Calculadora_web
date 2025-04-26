var inputNum = null;
var equation = [];
var value = 0;
var result = 0;

//Resets to initial state.
function clearScreen() {
  inputNum = null;
  equation = [];
  value = 0;
  result = 0;
  document.getElementById("screen").innerHTML = "";
}

//Creates the number.
function clickedNum(keyVal) {

  if (inputNum == result) clearScreen(); //A number is added right after the result, then the screen gets cleared.

  switch (keyVal) {
    case 0:
      inputNum = 0;
      break;
    case 1:
      inputNum = 1;
      break;
    case 2:
      inputNum = 2;
      break;
    case 3:
      inputNum = 3;
      break;
    case 4:
      inputNum = 4;
      break;
    case 5:
      inputNum = 5;
      break;
    case 6:
      inputNum = 6;
      break;
    case 7:
      inputNum = 7;
      break;
    case 8:
      inputNum = 8;
      break;
    case 9:
      inputNum = 9;
      break;
  }

  document.getElementById("screen").innerHTML += inputNum; //Writes the inputted number.
  value += inputNum.toString(); //Stores-carries the inputted number. Is a string, concatenating the digits and not adding them.
}

//Sets the equation.
function equationSet(keyOp) {
  if (inputNum === null) document.getElementById("screen").innerHTML += value; //Adds a zero when an operation is pressed not after a number.
  inputNum = null; //Initial state.

  equation.push(parseInt(value), keyOp); //Adds the inputted number and operation.
  value = 0; //Empties the carretilla of the number.
  document.getElementById("screen").innerHTML += " " + keyOp + " "; //Writes the inputted operator.
}

//Gives the result.
function resultCal() {
  if (inputNum === null) document.getElementById("screen").innerHTML += value; //Equal key has been pressed after an operation (non-number in between operation and equal sign).

  equation.push(parseInt(value)); //Adds the last inputted number.

  for (i = 0; i < equation.length;) {
    if (typeof equation[i] === 'number') { //The first element is a number. Only runs once; at the beginning of the iteration.
      result = parseInt(equation[i]);
      i++;
    } else { //The order is: number , operation, number and so on. That is why this!
      switch (equation[i]) {
        case "+":
          result += parseInt(equation[i + 1]);
          break;
        case "-":
          result -= parseInt(equation[i + 1]);
          break;
        case "x":
          result *= parseInt(equation[i + 1]);
          break;
        case "/":
          result /= parseInt(equation[i + 1]);
          break;
      }
      i += 2;
    }
  }

  let answer = " = " + result; // Creates the string.

  inputNum = value = result;
  document.getElementById("screen").innerHTML += answer; //Writes the answer in the screen.
}
