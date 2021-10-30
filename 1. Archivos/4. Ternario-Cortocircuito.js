const temperatura = 40;

// Solo podemos tener una respuesta "true" y una "false".
console.log(temperatura > 30 ? "¡Qué horno!" : "¡Zafa!");

// Podemos no querer un "False", solo que haga algo si es "True":

// Si no cumple la condición, devuelve un "false", no tiene una segunda condición:
console.log(temperatura > 30 && "¡Tomá un helado!");
