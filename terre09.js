"use strict"

// Créez un programme qui affiche la racine carrée d’un entier positif.
// $ > node exo.js 9
// 3
// console.log(Math.sqrt(num));

const num = parseInt(process.argv[2]);

let x = 0;
let result = 0;

if(typeof(num) !== Number){
  console.log("Erreur");
} else {
  do {
    x++;
    result = x * x;
  }while(result !== num);

  console.log(x);
}
