"use strict"

////////////////////////////////////////////////////////////////////
// Créez un programme qui affiche si un nombre est premier ou pas.
////////////////////////////////////////////////////////////////////
// EXEMPLE:
////////////
// $ > node exo.js 5
// Oui, 5 est un nombre premier.
// -------------------------------
// $ > node exo.js 6
// Non, 6 n’est pas un nombre premier.
////////////////////////////////////////////////////////////////////

const num = parseInt(process.argv[2]);
let result = 0;
let count = 0;

if (num < 0) {
  console.log("Réssayez avec un chiffre entier positif")

} else if(Number.isNaN(num)){
  console.log("Ce n'est pas un chiffre")

} else if (num <= 1) {
  console.log(`Non, ${num} n'est pas un nombre premier`);

} else{
  for(let i = num; i > 0; i--){
    result = num / i;

    if(Number.isInteger(result)){
      count++;
    }
  }

  if(count === 2){
    console.log(`Oui, ${num} est un nombre premier`);
  } else {
    console.log(`Non, ${num} n'est pas un nombre premier`);
  }
}
