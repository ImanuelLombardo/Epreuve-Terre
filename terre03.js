"use strict"

// Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Récupérer la lettre en paramètre
const paraLetter = process.argv;

// Mettre en ligne
let inline = "";

// Index Lettre
let indexLetter = undefined;
for(let i = 0; i < length(alphabet); i++) {
  if(paraLetter[2] === alphabet[i]) {
    indexLetter = i;
  };
};


// Trouver l'index du tableau (alphabet) à partir de la lettre récupérer
for(let i = indexLetter; i < length(alphabet); i++) {
  inline += alphabet[i] + "";
};

console.log(inline);

// Fonction
function length(arr) {
  let count = 0;
  do {
    count++;
  } while(arr[count] !== undefined);

  return count;
};
