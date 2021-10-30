const age = 15;

//No evalúa "age", sino "true" porque evalúa si es verdad que está en ese rango.
switch (true) {
  case age < 2:
    console.log("Jardín maternal.");
    break;
  case age >= 2 && age < 5:
    console.log("Jardín de infantes.");
    break;
  case age >= 5 && age < 13:
    console.log("Primaria.");
    break;
  case age >= 13 && age < 18:
    console.log("Secundaria.");
    break;
  case age >= 18:
    console.log("Universidad.");
    break;
  default:
    console.log("No debería entrar acá.");
    break;
}
