function suma(a, b) {
  console.log(a + b);
}

// "NaN" es not a number:
suma();

suma(2, 4);
suma("2", "2");

function suma2(a, b, c) {
  console.log(a + b - c);
}

suma2("2", "2", "2");

function suma3(a, b, c, d) {
  console.log((a + b) * (c - d) * 15);
}

// Como "parámetro", pasamos los valores que sabemos que van a variar. No necesitamos pasar los que ya sepamos qué van a ser.
suma3(3, 3, 7, 9);
