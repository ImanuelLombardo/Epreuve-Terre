"use strict"

// Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Récupérer la lettre en paramètre
const paraLetter = process.argv;

// Mettre en ligne
let inline = "";

// Index Lettre
let indexLetter = undefined;
for(let i = 0; i < alphabet.length; i++) {
  if(paraLetter[2] === alphabet[i]) {
    indexLetter = i;
  };
};
// switch (paraLetter[2]) {
//   case "a":
//     indexLetter = 0;
//     break;

//   case "b":
//     indexLetter = 1;
//     break;

//   case "c":
//     indexLetter = 2;
//     break;

//   case "d":
//     indexLetter = 3;
//     break;

//   case "e":
//     indexLetter = 4;
//     break;

//   case "f":
//     indexLetter = 5;
//     break;

//   case "g":
//     indexLetter = 6;
//     break;

//   case "h":
//     indexLetter = 7;
//     break;

//   case "i":
//     indexLetter = 8;
//     break;

//   case "j":
//     indexLetter = 9;
//     break;

//   case "k":
//     indexLetter = 10;
//     break;

//   case "l":
//     indexLetter = 11;
//     break;

//   case "m":
//     indexLetter = 12;
//     break;

//   case "n":
//     indexLetter = 13;
//     break;

//   case "o":
//     indexLetter = 14;
//     break;

//   case "p":
//     indexLetter = 15;
//     break;

//   case "q":
//     indexLetter = 16;
//     break;

//   case "r":
//     indexLetter = 17;
//     break;

//   case "s":
//     indexLetter = 18;
//     break;

//   case "t":
//     indexLetter = 19;
//     break;

//   case "u":
//     indexLetter = 20;
//     break;

//   case "v":
//     indexLetter = 21;
//     break;

//   case "w":
//     indexLetter = 22;
//     break;

//   case "x":
//     indexLetter = 23;
//     break;

//   case "y":
//     indexLetter = 24;
//     break;

//   case "z":
//     indexLetter = 25;
//     break;

//   default:
//     break;
// }

// Trouver l'index du tableau (alphabet) à partir de la lettre récupérer
for(let i = indexLetter; i < alphabet.length; i++) {
  inline += alphabet[i] + "";
};

console.log(inline);
