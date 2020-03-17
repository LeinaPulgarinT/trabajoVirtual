'use strict';
//obtengo el elemnto que quiero cambiar
var titleChange = document.querySelector('.title');
var nameSelect = document.querySelector('.mi-nombre');

//reasigno la variable nameSelect para que sea el nombre seleccionado sea el segundo li
nameSelect = document.querySelector('.mi-compañera');

//se cambia el titulo y se agrega el nombre de la seleccionada
titleChange.innerHTML = titleChange.innerHTML + " " + nameSelect.innerHTML;