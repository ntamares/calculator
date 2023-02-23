let query = [];
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const equalsBtn = document.getElementById('btn-equals');
const clearBtn = document.getElementById('btn-clear');
const decimalBtn = document.getElementById('btn-decimal');
const deleteBtn = document.getElementById('btn-delete');
const display = document.getElementById('calc-display');
let canAppendNumbers = true;
let canAppendDecimal = true;

function getResult(){
  let qLen = query.length;
  let num2 = '';  
  let result;

  qLen === 1 ? num1 = query[0] : num1 = '';

  const opIndex = query.findIndex(el => {
    return (el === '+' || el === '-' || el === '/' || el === '*');
  });


  for(let i = 0; i < opIndex; i++){
    num1 += query[i];
  }

  if(opIndex === -1 || qLen === (opIndex + 1)) return;

  for(let i = opIndex + 1; i < query.length; i++){
    num2 += query[i];
  }

  num1 = +num1;
  num2 = +num2;

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
    case -1:
      return;
  }

  display.value = result;

  query.length = 0;
  query.push(+result);

  canAppendNumbers = false;
}

function appendNumber(){
  let input = +(this.innerText);
  
  if(query.length === 0){
    display.value = '';
  }

  if(canAppendNumbers){
    query.push(input);
    display.value += input;
  }
}

function appendOperator(){
  let input = this.id.slice(4, this.id.length);
  let qLen = query.length;
  
  const opIndex = query.findIndex(el => {
    return (el === '+' || el === '-' || el === '/' || el === '*');
  });

  if(opIndex !== -1 && (qLen > opIndex + 1)){
    getResult();
    qLen = query.length;
  }

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

  if(typeof query[qLen - 1] === 'number'){
    query.push(input);
    display.value += input;
  }

  if(query[qLen - 1] === '+' || query[qLen -1] === '*' || query[qLen -1] === '-' || query[qLen - 1] === '/'){
    query[qLen - 1] = input;
    display.value = display.value.slice(0, -1) + input;
  }

  console.log('checkpoint');
 
  canAppendDecimal = true;
  canAppendNumbers = true;
}

function appendDecimal(){
  console.log(query);
  if(canAppendDecimal){
    query.push('.');
    display.value = display.value + '.'
    canAppendDecimal = false;
    canAppendNumbers = true;
  }
}

function clear(){
  query.length = 0;
  result = '';
  canAppendNumbers = true;
  display.value = '';
}

function backspace(){
  query.pop();
  display.value = query;
}

numberBtns.forEach(btn => btn.addEventListener('mousedown', appendNumber));
operatorBtns.forEach(btn => btn.addEventListener('mousedown', appendOperator));
equalsBtn.addEventListener('mousedown', getResult);
clearBtn.addEventListener('mousedown', clear);
deleteBtn.addEventListener('mousedown', backspace);
decimalBtn.addEventListener('mousedown', appendDecimal);