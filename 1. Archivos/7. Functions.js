//! https://www.w3schools.com/js/js_functions.asp

//* Hay que declarar la función:

// Ese "name" es un parámetro, un placeholder.
// No va a saber qué escribir en "name" hasta que ejecutemos la función y le pongamos un valor.
function saludo(name) {
  console.log(`Hola, ${name}.`);
}

//* Y después hay que llamarla:
// Entre los "paréntesis", ponemos lo que pasamos como parámetro.
// Podemos llamar mil veces a las funciones.
saludo("Pam");
saludo("Totoro");
saludo("Pablo");
saludo();
// Al no pasar un valor, nos mete un "undefined" en el "name".
saludo(16);
saludo(true);
// No especificamos un "tipo"; tal como estamos ahora, no podemos especificarlo, así que... lo que le pasen, lo va a usar.
