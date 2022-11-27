"use restrict"

//objeto calculadora
let calculadora = {

    //Almacena el ultimo resultado
    lastResult: 0,

    //metodos de operadores
    sumar(num1, num2) {
        this.lastResult = num1 + num2;
        return this.lastResult;
    },

    restar(num1, num2) {
        this.lastResult = num1 - num2;
        return this.lastResult;
    },

    multiplicar(num1, num2) {
        this.lastResult = num1 * num2;
        return this.lastResult;
    },

    dividir(num1, num2) {
        this.lastResult = num1 / num2;
        return this.lastResult;
    }
}

//PROGRAMA
//condicional para bucle
let quieroIrme = false;

do {
    //mensaje de bienvenida
    alert('Bienvenido al ejercicio calculadora 3');

    //variables
    let resultado;
    let operador = sacarOperador();
    let arrNumeros = sacarNumeros();

    //que operador usar
    switch (operador) {
        case '+':
            resultado = calculadora.sumar(arrNumeros[0], arrNumeros[1]);
            break;

        case '-':
            resultado = calculadora.restar(arrNumeros[0], arrNumeros[1]);
            break;

        case '*':
            resultado = calculadora.multiplicar(arrNumeros[0], arrNumeros[1]);
            break;

        case '/':
            resultado = calculadora.dividir(arrNumeros[0], arrNumeros[1]);
    }

    //mostrar resultado
    alert(resultado);

    //condicional para seguir en la calculadora
    let salir = confirm("¿Quieres seguir calculando?");
    if (salir == false) {
        quieroIrme = true;
    }

} while (quieroIrme == false);

//FUNCIONES
//preguntar y validar operador
function sacarOperador() {

    let operadores = ['+', '-', '*', '/'];
    let operador;
    let operadorEstaLimpio = false;

    do {
        operador = prompt('Introduzca unicamente una de las siguientes operaciones (+ , -, *, /)');
        operador.trim();

        if (operadores.includes(operador)) {
            operadorEstaLimpio = true;
        }

    } while (!operadorEstaLimpio);

    return operador;
}

//pregunta y valida numeros, coge dos numeros entre un espacio
function sacarNumeros() {

    let numerosEstanLimpios = false;
    let arrNumerosLimpios = [];

    do {
        let numeros = prompt('Introduce dos numeros a operar separados por espacios');
        numeros.trim();
        arrNumerosLimpios = numeros.split(' ');
        
        if (arrNumerosLimpios[0] === 'R') {
            arrNumerosLimpios[0] = calculadora.lastResult;
        }

        if (arrNumerosLimpios[1] === 'R') {
            arrNumerosLimpios[1] = calculadora.lastResult;
        }
        
        arrNumerosLimpios[0] = Number(arrNumerosLimpios[0]);
        arrNumerosLimpios[1] = Number(arrNumerosLimpios[1]);
        if (!isNaN(arrNumerosLimpios[0]) && !isNaN(arrNumerosLimpios[1])) {
            numerosEstanLimpios = true;
        }

    } while (numerosEstanLimpios === false);

    return arrNumerosLimpios;
}