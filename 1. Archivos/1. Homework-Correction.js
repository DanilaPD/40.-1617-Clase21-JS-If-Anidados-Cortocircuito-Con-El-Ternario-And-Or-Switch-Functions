///6

const num1 = 16;

if (num1 >= 16) {
  console.log("Sí.");
} else {
  console.log("No.");
}

if (num1 > 15) {
  console.log("Sí.");
} else {
  console.log("No.");
}

///3

const animal = "miau";

if (animal === "miau") {
  console.log("Es un gato.");
} else if (animal === "guau") {
  console.log("Es un perro.");
} else {
  console.log("No sé qué animal es.");
}

// Cuándo usar == y cuándo ===:

// Con 2 iguales, chequeo si el "valor" es el mismo y, con 3 iguales, también chequeo si el "tipo" es el mismo.
// Son iguales, pero al mismo tiempo, no. Con == son iguales y con === no son iguales estrictos.

const num2 = 15;
const num3 = "15";

if (num2 == num3) {
  console.log("Son iguales, pero no estrictos.");
} else {
  console.log("No son iguales.");
}

if (num2 === num3) {
  console.log("Son iguales estrictos.");
} else {
  console.log("No son iguales estrictos.");
}

///

// else if (ruidoAnimal !== "Maulla" || ruidoAnimal !== "Ladra") {
//   console.log("No se sabe qué es esa cosa.")
// }