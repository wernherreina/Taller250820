
/* Ejemplo funciones 250820Función*/

/* var divMensaje = document.getElementById('mensaje')
console.log(divMensaje)
console.log(divMensaje.innerText)

 */
function btnCantante (){
    var Nombre = prompt('Escribe el nombre')
    console.log("Nombre ", Nombre)
    document.getElementById("1Nombre").innerHTML = Nombre; 
    var edad = prompt('Escribe la Edad')
    console.log("edad ", edad)
    document.getElementById("1edad").innerHTML = edad; 
    var profesion = prompt('Escribe la profesion')
    console.log("profesion ", profesion)
    document.getElementById("1profesion").innerHTML = profesion; 
    var banda = prompt('Escribe la Banda')
    console.log("Nombre ", banda)
    document.getElementById("1banda").innerHTML = banda; 

/*     divNombre.innerText  = Nombre
    divEdad.innerText  = edad   
    divProfesion.innerText  = profesion
    divbanda.innerText  = banda */

}


/* function pedirApodo (){
    var apodo = prompt('Escribe tu apodo')
    console.log("Apodo ",apodo)
}

function darMensaje (){
    var nombre = prompt('Escribe tu nombre')
    var apodo = prompt('Escribe tu apodo')
    var mensaje =`Mi nombre es ${nombre} pero mi apodo es ${apodo}`
    console.log(mensaje)
    divMensaje.innerText  = mensaje
    
} */

/* var btnApodo = document.querySelector('#btnApodo')
 console.log("este es el boton del apodo", btnApodo) 

var btn3 = document.querySelector('.btn3') 
console.log("Apodo2 btn3 ", btn3)*/


/* Opción 1. Funcion Tipo Flecha*/

/*  btnApodo.addEventListener('click', ()=>{
var apodo = prompt('Escribe tu apodo')
console.log(apodo)
} )   */

/* Opción 2. Funcion Tipo Flecha*/

/* function pedirApodo (){
    var apodo = prompt('Escribe tu apodo')
    console.log(apodo)
}

btnApodo.addEventListener('click', pedirApodo )
 */

 /*
// Forma 2
var pedirApodo = () => {
 var apodo  = prompt('Escribe tu apodo')

}

// Forma 4

btnApodo.addEventListener('click', ()=>{
    var apodo  = prompt('Escribe tu apodo')
}


console.log("este es el boton del apodo", btnApodo) */