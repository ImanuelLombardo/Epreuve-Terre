"use strict"

// Créez un programme qui permet de déterminer si l’argument donné est un entier pair ou impair..

// Récupérer paramètre
const arg = process.argv;

// Tester si pair ou impair
if(arg[2] % 2 === 0){
  console.log("Pair");
} else if(arg[2] % 2 === 1 || arg[2] % 2 === -1) {
  console.log("Impair");
} else {
  console.log(arg[2] % 2);
  console.log("Tu ne me la mettras pas à l\’envers.");
};
