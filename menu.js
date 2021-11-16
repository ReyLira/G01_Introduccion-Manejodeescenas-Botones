let btnmenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');
btnmenu.addEventListener('click', function(){
    'use strict';
    menu.classList.toggle('mostrar');
});

function saludar(nombre){
    console.log("!Hola"+" "+nombre+" "+"Gracias por su Visita¡")
    alert("!Hola"+" "+nombre+" "+"Gracias por su Visita¡")
    }