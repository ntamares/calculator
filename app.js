let query = [];
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const equalsBtn = document.getElementById('btn-equals');
const clearBtn = document.getElementById('btn-clear');
const decimalBtn = document.getElementById('btn-decimal');
const deleteBtn = document.getElementById('btn-delete');
let isNewQuery = false;

function getResult(){
  let qLen = query.length;
  let num2 = '';  
  let result;
  let isNewQuery = false;

  qLen === 1 && isNewQuery ? num1 = query[0] : num1 = '';
  // ??? dont use ternary?

  const opIndex = query.findIndex(el => {
    return (el === '+' || el === '-' || el === '/' || el === '*');
  });

  for(let j = 0; j < opIndex; j++){
    num1 += query[j];
  }

  for(let k = opIndex + 1; k < query.length; k++){
    num2 += query[k];
  }

  num1 = +num1;
  num2 = +num2;

  // do checks for query
  //split query
  // make result num1, then clear rest of arr?

  switch(query[opIndex]){
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
       alert('error');
  }

  document.getElementById('calc-display').value = result;
}

function appendNumber(){
  let input = +(this.innerText);
  let qLen = query.length;

  query.push(input);

  console.log(query);

  document.getElementById('calc-display').value = query;
  // if(isNewQuery) clear?
}

function appendOperator(){
  let input = this.id.slice(4, this.id.length);
  let qLen = query.length;

  switch(input){
    case 'plus':
      input = '+';
      break;
    case 'minus':
      input = '-';
      break;
    case 'multiply':
      input = '*';
      break;
    case 'divide':
      input = '/';
      break;
    default:
      break;
  }

  if(qLen === 0) return;
  
  //TODO check if there are two separate numbers and an operator
  // then do 'temporary' execute in string to display (query and CURRENT result)
  
  if(typeof query[qLen - 1] === 'number'){
    query.push(input);
  }

  console.log('checkpoint 5');

  if(typeof query[qLen - 1] === 'string'){
    query[qLen - 1] = input;
  }

  console.log(query);

  document.getElementById('calc-display').value = query;
}

function clear(){
  query.length = 0;
  result = '';

  document.getElementById('calc-display').value = '';
}

function backspace(){
  query.pop();

  document.getElementById('calc-display').value = query;
}

// add listeners to each button
numberBtns.forEach(btn => btn.addEventListener('mousedown', appendNumber));
operatorBtns.forEach(btn => btn.addEventListener('mousedown', appendOperator));
equalsBtn.addEventListener('mousedown', getResult);
clearBtn.addEventListener('mousedown', clear);
deleteBtn.addEventListener('mousedown', backspace);