// plik scripts.js

var txt = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';

var animalUpperCased = animal.toUpperCase();

var txtCharsAfter = txt.replace('Papugi', animal);
console.log(txtCharsAfter);

txtCharsAfter.lenght;
console.log(txtCharsAfter.substr(0, 41));

