//Declaro variables
var myName = "leina";
var nameCompañera = "monica";
var name = "roberta";

//se reasigna la condicional name, para ver que si se funciona para if, y para else if

name = "leina";

//condicionales
if (name === myName || name === nameCompañera) {
    console.log(`Bienvenida, ${name}.`);
} else if (name !== myName || name !== nameCompañera) {
    console.log(
        "Lo siento pero el usuario que has introducido no está registrado"
    );
}