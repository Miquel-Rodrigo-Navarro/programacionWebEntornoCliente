'use restrict'

// objeto calculadora
const calculadora = {

  // Almacena el ultimo resultado
  lastResult: 0,

  // metodos de operadores
  sumar (num1, num2) {
    this.lastResult = num1 + num2
    return this.lastResult
  },

  restar (num1, num2) {
    this.lastResult = num1 - num2
    return this.lastResult
  },

  multiplicar (num1, num2) {
    this.lastResult = num1 * num2
    return this.lastResult
  },

  dividir (num1, num2) {
    this.lastResult = num1 / num2
    return this.lastResult
  }
}

// PROGRAMA
// condicional para bucle
let quieroIrme = false

do {
  // mensaje de bienvenida
  window.window.alert('Bienvenido al ejercicio calculadora 3')

  // variables
  let resultado
  const operador = sacarOperador()
  const arrNumeros = sacarNumeros()

  // que operador usar
  switch (operador) {
    case '+':
      resultado = calculadora.sumar(arrNumeros[0], arrNumeros[1])
      break

    case '-':
      resultado = calculadora.restar(arrNumeros[0], arrNumeros[1])
      break

    case '*':
      resultado = calculadora.multiplicar(arrNumeros[0], arrNumeros[1])
      break

    case '/':
      resultado = calculadora.dividir(arrNumeros[0], arrNumeros[1])
  }

  // mostrar resultado
  window.alert(resultado)

  // condicional para seguir en la calculadora
  const salir = window.confirm('¿Quieres seguir calculando?')
  if (salir === false) {
    quieroIrme = true
  }
} while (quieroIrme === false)

// FUNCIONES
// preguntar y validar operador
function sacarOperador () {
  const operadores = ['+', '-', '*', '/']
  let operador
  let operadorEstaLimpio = false

  do {
    operador = window.prompt('Introduzca unicamente una de las siguientes operaciones (+ , -, *, /)')
    operador.trim()

    if (operadores.includes(operador)) {
      operadorEstaLimpio = true
    }
  } while (!operadorEstaLimpio)

  return operador
}

// pregunta y valida numeros, coge dos numeros entre un espacio
function sacarNumeros () {
  let numerosEstanLimpios = false
  let arrNumerosLimpios = []

  do {
    const numeros = window.prompt('Introduce dos numeros a operar separados por espacios')
    numeros.trim()
    arrNumerosLimpios = numeros.split(' ')

    if (arrNumerosLimpios[0] === 'R') {
      arrNumerosLimpios[0] = calculadora.lastResult
    }

    if (arrNumerosLimpios[1] === 'R') {
      arrNumerosLimpios[1] = calculadora.lastResult
    }

    arrNumerosLimpios[0] = Number(arrNumerosLimpios[0])
    arrNumerosLimpios[1] = Number(arrNumerosLimpios[1])
    if (!isNaN(arrNumerosLimpios[0]) && !isNaN(arrNumerosLimpios[1])) {
      numerosEstanLimpios = true
    }
  } while (numerosEstanLimpios === false)

  return arrNumerosLimpios
}
