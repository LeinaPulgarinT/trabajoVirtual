'use strict';

//obtengo el elemmento que quiero cambiar
var paragraphHello = document.querySelector('.hola-mundo');

//cambio el elemento y le agrego la palabra mundo

paragraphHello.innerHTML = paragraphHello.innerHTML + ' Mundo';