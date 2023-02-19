let query = [];
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const equalsBtn = document.getElementById("btn-equals");
const clearBtn = document.getElementById("btn-clear");
const decimalBtn = document.getElementById("btn-decimal");

function getResult(){
  let num1 = '';
  let num2 = '';  
  let result;
  const operators = '+-*/';
  let opIndex;
  // const opIndex = query.forEach(elem => {
  //   if(operators.indexOf(elem) === 1){
  //     return indexOf(elem);
  //   };
  // });

  for(let i = 0; i < query.length; i++){
    console.log('checking ' + query[i]);
    if(query[i] === '+' || query[i] === '-' || query[i] === '/' || query[i] === '*'){
      console.log('returning ' + i);
      opIndex = i;
      break;
    }
  }

  for(let j = 0; j < opIndex; j++){
    num1 += query[j];
  }

  for(let k = opIndex + 1; k < query.length; k++){
    num2 += query[k];
  }

  num1 = +num1;
  num2 = +num2;
  
  console.log(`num1 is ${num1}`);
  console.log(`num2 is ${num2}`);
  console.log(num1 + num2);

  // do checks for query

  //split query

  // get indeox of operator

  // concat elems less than to be num1 and right num2

  // return num1 operator num2
}

function appendNumber(){
  let input = +(this.innerText);
  let qLen = query.length;

  query.push(input);

  console.log(query);
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
      //TODO exception?
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
}

// add listeners to each button
numberBtns.forEach(btn => btn.addEventListener('mousedown', appendNumber));
operatorBtns.forEach(btn => btn.addEventListener('mousedown', appendOperator));
equalsBtn.addEventListener('mousedown', getResult);
