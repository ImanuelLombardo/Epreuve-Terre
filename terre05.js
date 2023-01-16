"use strict"

// Créez un programme qui affiche le résultat et le reste d’une division entre deux nombres.

// Récupérer les 2 chiffres
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

// Calculer
const resultat = undefined;

if(num1 < num2 || num2 === 0 || length(process.argv) < 4){
  console.log("Erreur");
} else {
  console.log(`Resultat: ${Math.trunc(num1 / num2)}`);
  console.log(`Reste: ${num1 % num2}`);
};

// Fonction
function length(arr) {
let count = 0;

  do{
    count++;
  } while(arr[count] !== undefined);

  return count;
};
