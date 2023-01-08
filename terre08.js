"use strict"

// Créez un programme qui affiche le résultat d’une puissance.
// Exemple: $> node exo.js 2 3
// 8

const arg = process.argv;
const num = process.argv[2];
const exp = process.argv[3];
let resultat = num;

// Calcule nbr d'argument
function nbrArg(arr) {
  let count = 1;

  do{
    count++;
  } while(arr[count] !== undefined);

  return count;
};

// Si nbr argument différent de 4 alors Erreur
if(nbrArg(arg) !== 4) {
  console.log("Erreur");
} else{

  for(let i = 1; i < exp; i++){
    resultat *= num;
  };
  console.log(resultat);
}
