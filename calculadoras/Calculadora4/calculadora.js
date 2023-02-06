'use restrict'

// clase calculadora
class Calculadora {
  // Almacena el ultimo resultado
  _lastResult = 0

  // metodos de operadores
  sumar (num1, num2) {
    this.lastResult = num1 + num2
    return this.lastResult
  }

  restar (num1, num2) {
    this.lastResult = num1 - num2
    return this.lastResult
  }

  multiplicar (num1, num2) {
    this.lastResult = num1 * num2
    return this.lastResult
  }

  dividir (num1, num2) {
    this.lastResult = num1 / num2
    return this.lastResult
  }
}

// case error operador
class ErrorOperador extends Error {
  constructor (message) {
    super(message)
    this.name = 'ErrorOperador'
  }
}

const calc = new Calculadora()

// PROGRAMA
// variable condicional para bucle y variable operador y operandos para comprobar nulls
let quieroIrme = false
let operador
let operandos
let resultado

do {
  // mensaje de bienvenida
  window.alert('Bienvenido al ejercicio calculadora 3')

  try {
    operador = sacarOperador()
    operandos = sacarNumeros()
    console.log(operador)
    console.log(operandos)
  } catch (error) {
    if (error instanceof ErrorOperador) {
      window.alert(`${error.name} | ${error.message}`)
    } else {
      window.alert('ErrorNumerico | Los números no son correctos')
    }
  }

  // que operador usar
  switch (operador) {
    case '+':
      resultado = calc.sumar(operandos[0], operandos[1])
      break

    case '-':
      resultado = calc.restar(operandos[0], operandos[1])
      break

    case '*':
      resultado = calc.multiplicar(operandos[0], operandos[1])
      break

    case '/':
      resultado = calc.dividir(operandos[0], operandos[1])
  }

  // mostrar resultado
  window.alert(resultado)

  // condicional para seguir en la calculadora
  const salir = window.confirm('¿Quieres seguir calculando?')
  if (salir === false) {
    quieroIrme = true
  }
} while (quieroIrme === false || operador === undefined || operandos === undefined)

// FUNCIONES
// preguntar y validar operador
function sacarOperador () {
  const operadores = ['+', '-', '*', '/']

  const operador = window.prompt('Introduzca únicamente una de las siguientes operaciones (+ , -, *, /)')

  if (!operadores.includes(operador.trim())) {
    throw new ErrorOperador('No es correcto el operador')
  }

  return operador
}

// pregunta y valida numeros, coge dos numeros entre un espacio
function sacarNumeros () {
  let numerosEstanLimpios = false
  let arrNumerosLimpios = []

  const numeros = window.prompt('Introduce dos numeros a operar separados por espacios')
  arrNumerosLimpios = numeros.trim().split(' ')

  if (arrNumerosLimpios[0] === 'R') {
    arrNumerosLimpios[0] = calc.lastResult
  }

  if (arrNumerosLimpios[1] === 'R') {
    arrNumerosLimpios[1] = calc.lastResult
  }

  arrNumerosLimpios[0] = Number(arrNumerosLimpios[0])
  arrNumerosLimpios[1] = Number(arrNumerosLimpios[1])
  if (!isNaN(arrNumerosLimpios[0]) && !isNaN(arrNumerosLimpios[1])) {
    numerosEstanLimpios = true
  }

  if (!numerosEstanLimpios) {
    throw new Error()
  }

  return arrNumerosLimpios
}
