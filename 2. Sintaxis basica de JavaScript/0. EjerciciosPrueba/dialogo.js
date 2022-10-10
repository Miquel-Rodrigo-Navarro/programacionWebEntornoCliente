/*
let numero = Number(prompt("Escribe un código numérico", 0))

if(numero < 0){
    alert(-1);
} else if( numero === 0){
    alert(0);
} else {
    alert(1)
}
*/


//let result = (a + b < 4) ? 'Debajo' : 'Arriba';


/*
let age = Number(prompt("Introduce la edad"))
if(age >= 14 && age <= 90){
    alert('Edad correcta')
} else {
    alert('Edad incorrecta')
}
*/

/*
let name = prompt('¿Quien es?')

if(name == "Administrador") {
    let contrasenya = prompt('Contraseña');
    if(contrasenya === null || contrasenya ===''){
        alert('Cancelado');

    } else if(contrasenya != 'El mejor') {
        alert("Contraseña incorrecta");

    } else {
        alert('Bienvenido');

    }

}else if(name === null || name ===''){
    alert("Cancelado");

} else{
    alert("No te conozco");
}
*/


/*
let i;
for(i = 2; i <= 10; i+=2){
    alert(i)
}
*/

/*
let numero = prompt('Introduce un número mayor que 100');
while(numero <= 100 || numero === '' || numero === null){
    numero = prompt('Vuelve a introducir un número, pero que sea mayor que 100');
}
*/

/*
let numero = Number(10);

nextPrime:
for(let i = 2; i <= numero; i++){
    for(let j = 2; j < i; j++){
        if(i%j == 0) continue nextPrime;
    }
    alert(i);
*/

/*
let navegador = "Opera";
if(navegador === "Edge"){
    alert('Tienes Edge');

} else if(navegador === "Chrome" || navegador === "Firefox" || navegador === "Safari" || navegador === "Opera"){
    alert('Esta bien, soportamos estos navegdores');
} else {
    alert ('Esperamos que ésta página se vea bien')
}
*/

/*
let a = Number(prompt('a?', ''));
switch(a){
    case 0: alert(0); break;
    case 1: alert(1); break;
    case 2:
    case 3:
         alert('2,3'); break;
}
*/


