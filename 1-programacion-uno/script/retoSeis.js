'use strict';
//elijo el elemento a que le deseo agragar las etiquetas/contenido.
const elements = document.querySelector('.text');


//defino el contenido que quiero mostrar en la pagina web
const addedItems = '<h1>Lorem ipsum</h1><img src="http://via.placeholder.com/350x150" alt=""><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';

//agrego el contenido con innerHTML
elements.innerHTML = addedItems;