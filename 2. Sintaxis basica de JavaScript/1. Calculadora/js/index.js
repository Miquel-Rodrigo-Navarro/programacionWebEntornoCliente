//welecome message
alert('Bienvenido al ejercicio "Calculadora"');

//declare variables for first part
let operand;
let cleanOperand;
let IsClean = false;

//declare variables for second part
let numbers;
let cleanNumbers;
let numberOne;
let numberTwo;

//declare variables for third part
let result;

//FIRST PART
//ask for operand and check
do {
    operand = prompt('Introduzca unicamente una de las siguientes operaciones (+ , -, *, /)');
    cleanOperand = operand.replace(/\s+/g, "");

    if(cleanOperand === '+' || cleanOperand === '-' || cleanOperand === '*' || cleanOperand === '/') {
        IsClean = true;
    }

} while (IsClean === false);

//SECOND PART
//ask for numbers separate by a blanks and check
IsClean = false;
do {
    numbers = prompt('Introduce dos numeros a operar separados por espacios');
    cleanNumbers = numbers.split(' ');
    numberOne = Number(cleanNumbers[0]);
    numberTwo = Number(cleanNumbers[1]);

    if (!isNaN(numberOne) && !isNaN(numberTwo)) {
        IsClean = true;
    }

} while (IsClean === false);

//THIRD PART
//operate numbers whith the operand
switch (operand) {
    case '+':
        result = Number(numberOne + numberTwo);
        break;
    
    case '-':
        result = Number(numberOne - numberTwo);
        break;

    case '/':
        result = Number(numberOne / numberTwo);
        break;
    
    case '*':
        result = Number(numberOne * numberTwo);
}

//Show result
alert (result);