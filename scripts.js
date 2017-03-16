// plik scripts.js

var txt = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';

var animalUpperCased = animal.toUpperCase();

var txtCharsAfter = txt.replace('Papugi', animalUpperCased);
console.log(txtCharsAfter);

var halfTxtCharsAfter = txtCharsAfter.slice(0,txtCharsAfter.length/2);
console.log(halfTxtCharsAfter);

