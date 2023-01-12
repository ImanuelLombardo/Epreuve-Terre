"use strict"

///////////////////////////////////////////////////////////////////////////////////////////
// Créez un programme qui prend en paramètre trois entiers et affiche la valeur du milieu.
///////////////////////////////////////////////////////////////////////////////////////////
// Exemples d’utilisation:
///////////////////////////
// $ > ruby exo.rb 11 40 34
// 34
//--------------------------
// $ > ruby exo.rb 2 1 3
// 2
//--------------------------
// $ > ruby exo.rb 2 2 2
// erreur.
///////////////////////////////////////////////////////////////////////////////////////////

const args = process.argv;
const num1 = parseInt(args[2]);
const num2 = parseInt(args[3]);
const num3 = parseInt(args[4]);
const numbers = [num1, num2, num3];

///////////////////////////////////////////////
////////////
// Function
////////////

// Connaitre le nbr d'argument (chiffre)
function nbrArgs(arr){
  let count = 0;

  do{
    count++;
  } while(arr[count] !== undefined);

  return count - 2;
};
///////////////////////////////////////////////

// Controle si 3 chiffre passer en argument
if(nbrArgs(args) !== 3) {
  console.log("Vous n'avez pas mis le bon nombre de chiffre, vous devez en mettre 3");
} else if(num1 === num2 || num2 === num3 || num1 === num3){
  console.log("Erreur, Vous ne pouvez pas mettre 2 fois le même chiffre")
} else {
  // Mettre dans l'ordre croissant
  let temp = 0;

  if (numbers[0] > numbers[1]) {
    temp = numbers[0];
    numbers[0] = numbers[1];
    numbers[1] = temp;
  }

  if (numbers[1] > numbers[2]) {
    temp = numbers[1];
    numbers[1] = numbers[2];
    numbers[2] = temp;
  }

  if (numbers[0] > numbers[1]) {
    temp = numbers[0];
    numbers[0] = numbers[1];
    numbers[1] = temp;
  }

  // Affiche le deuxième nombre du tableau
  console.log(numbers[1]);
}
