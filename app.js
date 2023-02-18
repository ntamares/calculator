let query;
const numberBtns = document.getElementsByClassName("number");
const operandBtns = document.getElementsByClassName("operand");
const equalsBtn = document.getElementById("btn-equals");
const clearBtn = document.getElementById("btn-clear");
const decimalBtn = document.getElementById("btn-decimal");

// unnecessary?
// function appendQuery(button){
//   let result; 

//   // use stack?
//   // always display query and update result?
//   // only after eqauls?

//   return result;
// }

function appendOperand(operand){
  const btnId = "btn-" + operand;
  const btn = document.getElementById(btnId);

  //check if numbers are first
  // if operand is first on stack, ignore
  // if after number, put operand next on stack
  // if after number, there is already an operand, replace it
}

function appendNumber(num){
  // get num by target.id
  // check last entry into query
  // if number append (as string then parse?)
  // if after operand create next number on stack

  // update and use getresult everyime?
}

function getResult(query){
    let result;
}

// add listeners to each button
