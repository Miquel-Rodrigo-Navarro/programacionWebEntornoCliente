//conditional to follow in calculator
let conditional = false;
do {
    //welecome message
    alert('Bienvenido al ejercicio "Calculadora"');

    //declare variables for first part
    let operand;
    let cleanOperand;
    let IsClean = false;

    //declare variables for second part
    let numbers;
    let cleanNumbers = new Array();
    let numberOne;
    let numberTwo;

    //declare variables for third part
    let result;

    //FIRST PART
    //ask for operand and check
    function askAndCheck() {

        do {
            operand = prompt('Introduzca unicamente una de las siguientes operaciones (+ , -, *, /)');
            cleanOperand = operand.replace(/\s+/g, "");

            if(cleanOperand === '+' || cleanOperand === '-' || cleanOperand === '*' || cleanOperand === '/') {
                IsClean = true;
            }

        } while (IsClean === false);

    }

    askAndCheck();

    //SECOND PART
    //ask for numbers separate by a blanks and check
    IsClean = false;
    cleanNumbers = cleanTwoNumbers()
    function cleanTwoNumbers() {

        do {
            numbers = prompt('Introduce dos numeros a operar separados por espacios');
            cleanNumbers = numbers.split(' ');
            numberOne = Number(cleanNumbers[0]);
            numberTwo = Number(cleanNumbers[1]);

            if (!isNaN(numberOne) && !isNaN(numberTwo)) {
                IsClean = true;
            }

        } while (IsClean === false);

        let arrayCleanNumbers = new Array();
        return arrayCleanNumbers = [numberOne, numberTwo];
        
    }

    numberOne = cleanNumbers[0];
    numberTwo = cleanNumbers[1];

    //THIRD PART
    //operate numbers whith the operand
    switch (operand) {
        case '+':
            result = (numberOne, numberTwo) => numberOne + numberTwo;
            break;
        
        case '-':
            result = (numberOne, numberTwo) => Number(numberOne - numberTwo);
            break;

        case '/':
            result = (numberOne, numberTwo) => Number(numberOne / numberTwo);
            break;
        
        case '*':
            result = (numberOne, numberTwo) => Number(numberOne * numberTwo);
    }

    //Show result
    alert (result(numberOne, numberTwo));

    //if for follow calculator
    let salir = confirm("¿Quieres seguir en la app?");

    if(salir == false) {
        conditional = true;
    }

} while (conditional === false);