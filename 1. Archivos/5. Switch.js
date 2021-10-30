// https://www.w3schools.com/js/js_switch.asp

const alien = {
  ojos: 0,
  idioma: "Inglés",
  planeta: "Tatooine",
};

// Después del "break" no ejecuta nada hasta detectar que diga "case" o "default".

switch (alien.ojos) {
  case 0:
    console.log("Miraluka.");
    break;
  case 1:
    console.log("Abyssin.");
    break;
  case 2:
    console.log("Wookie.");
    break;
  case 3:
    console.log("Gran.");
    break;
  case 4:
    console.log("Dyplotids.");
    break;
    console.log("No va a entrar porque dejó de ejecutar.");
  default:
    console.log("No sé qué es, pero seguro vive en Tatooine.");
}

// El switch pasa en los paréntesis el "key" y en el case, el "valor":
switch (alien.planeta) {
  case "Tatooine":
    console.log("Es un desierto.");
    break;
  case "Endor":
    console.log("Está lleno de osos.");
    break;
  default:
    console.log("Eso no es una luna.");
    break;
}

// El "default" es a dónde cae cuando no se cumplió la condición en ninguno de los "case".
