var añosPerros = parseInt(
    prompt("por favor ingrese los años de vida que tiene el perro: ")
);

if (añosPerros === 1) {
    console.log("La edad del perro equivale a 15 años de humano");
} else if (añosPerros === 2) {
    console.log("La edad del perro equivale a 9 años de humano");
} else if (añosPerros >= 3) {
    console.log("La edad del perro equivale a 5 años de humano");
}