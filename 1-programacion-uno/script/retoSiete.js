'use strict';
//elijo el elemento a que le deseo agragar las etiquetas/contenido.
const listElements = document.querySelector('.list-empty');


//defino el contenido que quiero mostrar en la pagina web
const addedItems = ' <li>1</li><li>2</li><li>3</li>'


//agrego el contenido con innerHTML
listElements.innerHTML = addedItems;