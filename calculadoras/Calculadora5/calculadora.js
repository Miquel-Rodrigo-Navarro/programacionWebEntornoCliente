'use restrict'

// CLASES --------------------------------------------------------------------------------------
// clase calculadora
class Calculadora {
  // Almacena el ultimo resultado
  _operador1 = 0
  _operador = ''

  // metodos de operadores
  sumar (num1, num2) {
    return Number(num1) + Number(num2)
  }

  restar (num1, num2) {
    return Number(num1) - Number(num2)
  }

  multiplicar (num1, num2) {
    return Number(num1) * Number(num2)
  }

  dividir (num1, num2) {
    return Number(num1) / Number(num2)
  }
}

const calc = new Calculadora()

// FUNCIONES INTERFAZ --------------------------------------------------------------------------------
CreateCalculator()
// llama a las funciones necesarias para crear la interfaz de la calculadora
function CreateCalculator () {
  AddContainer()
  AddButtons()
}

// función que crea el contenedor donde iran los botones y el resultado de la calculadora
function AddContainer () {
  // se crea el div contenedor
  const contenedor = document.createElement('div')
  // añadimos funcionalidad onlick
  contenedor.onclick = function (event) {
    if (event.target.tagName === 'BUTTON') { // solo actuará si lo que se clica es un button
      const operadores = ['+', '-', 'x', '/', '=']
      if (operadores.includes(event.target.textContent)) { // si el botón pulado es un operador
        operar(event.target.textContent)
      } else { // si el boton pulsado no es un operador
        switch (event.target.textContent) {
          case 'C':
            limpiar()
            break

          case 'R':
            printLastResult()
            break

          default: // si el botón presionado es un número
            printNumbers(event.target.textContent)
        }
      }
    }
  }
  // se añade como primer hijo del body
  document.body.prepend(contenedor)
}

// función que añade la interfaz de los botones necesarios para la calculadora
function AddButtons () {
  // llamamos a la función que añade la interfaz de la calculadora
  AddResult()
  // dos arrays, uno para todo el texto de todos los botones y otro solo para operadores para filtrar y meter clases de operador
  const textoBotones = ['R', '+', '7', '8', '9', '-', '4', '5', '6', 'x', '1', '2', '3', '/', '0', '.', 'C', '=']
  const operadores = ['R', '+', '-', 'x', '/', 'C', '=']
  for (let i = 0; i < 18; i++) { // recorremos 18 veces para añadir todos los botones
    // creamos el boton con su texto a continuación
    const btn = document.createElement('button')
    btn.textContent = textoBotones[i]
    // añadimos el botón al div principal
    document.body.querySelector('div').append(btn)
    if (operadores.includes(textoBotones[i])) { // a los botones cuyo texto contenga un operador se les añade una clase
      btn.classList.add('item-operador')
    }
  }
}

// función que devuelve la interfaz del resultado
function AddResult () {
  // se crea el div resultado y su atributo id
  const resultado = document.createElement('div')
  resultado.innerHTML = '0'
  resultado.setAttribute('id', 'display')
  // se añade el div resultado como primer hijo del div contenedor
  document.body.querySelector('div').prepend(resultado)
}

// FUNCIONALIDADES PARA BOTONES -----------------------------------------------------------------
function printNumbers (numero) {
  // pantalla para ir modificandola y viendo os resulatados
  const pantalla = document.getElementById('display')
  // controlamos que en la pantalla no se salgan los números
  if (pantalla.textContent.length < 9) {
    // controlamos que no se ponga mas de 1 punto
    if (pantalla.textContent === '0' && numero !== '.') {
      pantalla.textContent = numero
    } else if (!pantalla.textContent.includes('.')) {
      pantalla.textContent += numero
    } else if (pantalla.textContent.includes('.') && numero !== '.') {
      pantalla.textContent += numero
    }
  }
}

function operar (operador) {
  // pantalla de resultados
  const pantalla = document.getElementById('display')
  // si se presionó el =
  if (operador === '=') {
    switch (calc._operador) {
      case '+':
        pantalla.textContent = calc.sumar(calc._operador1, document.getElementById('display').textContent)
        break
      case '-':
        pantalla.textContent = calc.restar(calc._operador1, document.getElementById('display').textContent)
        break
      case 'x':
        pantalla.textContent = calc.multiplicar(calc._operador1, document.getElementById('display').textContent)
        break
      case '/':
        pantalla.textContent = calc.dividir(calc._operador1, document.getElementById('display').textContent)
        break
    }
    // se guarda el resultado en un sessionStorage
    window.sessionStorage.setItem('lastResult', pantalla.textContent)
    // vaciamos la variable del operador
    calc._operador = ''
  } else { // si se presiona otro operador
    calc._operador = operador
    calc._operador1 = pantalla.textContent
    pantalla.textContent = '0'
  }
}

function limpiar () {
  calc._operador = ''
  calc._operador1 = ''
  document.getElementById('display').textContent = '0'
}

function printLastResult () {
  // pantalla con resultados
  const pantalla = document.getElementById('display')
  if (window.sessionStorage.getItem('lastResult') !== null) {
    pantalla.textContent = window.sessionStorage.getItem('lastResult')
  } else {
    pantalla.textContent = '0'
  }
}
