"use strict"

// Créez un programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.

const arg = process.argv;
let length = 0;

// Capturer le nombre d'argument
function nbrArg(arr) {
  let count = 0;

  do{
    count += 1;
  } while(arr[count] !== undefined);

  return count;
};

// Calculer le nombre de caractère
function itemLength(arr) {
  do{
    length += 1;
  } while(arr[2][length] !== undefined);

  return length;
};

// Si nbr argument pas = 3 alors erreur
if(nbrArg(arg) !== 3){
  console.log("Erreur");
} else{
  console.log(itemLength(arg))
};
