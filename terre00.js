"use strict"

// Créer un programme qui affiche l'alphabet en lettres minuscules suivi d'un retour à la ligne

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let inLine = "";

for (let i = 0; i < alphabet.length; i++) {
  inLine += alphabet[i] + "";
}
console.log(inLine);

console.log("");
