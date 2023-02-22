let query = [];
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const equalsBtn = document.getElementById('btn-equals');
const clearBtn = document.getElementById('btn-clear');
const decimalBtn = document.getElementById('btn-decimal');
const deleteBtn = document.getElementById('btn-delete');
let canAppendNumbers = true;

function getResult(){
  let qLen = query.length;
  let num2 = '';  
  let result;

  qLen === 1 ? num1 = query[0] : num1 = '';
  // ??? dont use ternary?

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

  document.getElementById('calc-display').value = result;

  query.length = 0;
  query.push(+result);

  canAppendNumbers = false;
  console.log(query);
}

function appendNumber(){
  let input = +(this.innerText);
  
  if(query.length === 0){
    document.getElementById('calc-display').value = '';
  }

  if(canAppendNumbers){
    query.push(input);
    document.getElementById('calc-display').value += input;

  }
}

function appendOperator(){
  let input = this.id.slice(4, this.id.length);
  let qLen = query.length;
  let display = document.getElementById('calc-display');
  
  const opIndex = query.findIndex(el => {
    return (el === '+' || el === '-' || el === '/' || el === '*');
  });

  if(opIndex !== -1 && (qLen > opIndex + 1)){
    getResult();
    qLen = query.length;
  }

  console.log('input is ' + input);
  console.log(typeof query[qLen - 1]);


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
  console.log('checkpoint 1')
  if(typeof query[qLen - 1] === 'number'){
    console.log('checkpoint 2')

    query.push(input);
    display.value += input;
  }

  if(query[qLen - 1] === '+' || query[qLen -1] === '*' || query[qLen -1] === '-' || query[qLen - 1] === '/'){
    query[qLen - 1] = input;
    display.value = display.value.slice(0, -1) + input;
    console.log('checkpoint 3')
  }
 
  console.log(query);
  canAppendNumbers = true;
}

function clear(){
  query.length = 0;
  result = '';
  canAppendNumbers = true;
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