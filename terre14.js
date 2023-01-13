"use strict"

/////////////////////////////////////////////////////////////////////////////
// Créez un programme qui détermine si une liste d’entiers est triée ou pas.
/////////////////////////////////////////////////////////////////////////////
// Exemples d’utilisation:
///////////////////////////
// $ > ruby exo.rb 9 8 3
// Pas triée!
//---------------------------
// $ > ruby exo.rb 3 8 9 12
// Triée!
//---------------------------
// $ > ruby exo.rb “Salut”
// erreur.
/////////////////////////////////////////////////////////////////////////////

const args = process.argv;

/////////////////////////////////////////////////////////////////////////////
// Functions
/////////////
// Faire un tableau de chiffre avec les arguments
function numbersArray(arr){
  const numbers = [];

  for(let i = 2; i < arr.length; i++) {
    numbers.push(parseInt(arr[i]));
  };

  if(arrIsNumber(arr)) {
    return numbers;
  };

};

// Controle si argument est un chiffre
function arrIsNumber(arr){
  for(let i = 0; i < arr.length - 1; i++) {
    if(Number.isNaN(arr[i]) || typeof(arr[i])){
      console.log("Erreur, ne mettez que des chiffres.");
      return false;
    } else {
      return true;
    };
  }
}

// Condition pour voir si c'est triée
function arrIsSorted(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    let next = i+1;

    if(arr[i] < arr[next]) {
      if(next === arr.length - 1) {
        console.log("Triée!");
        break;
      }
    } else if(arr[i] > arr[next]) {
      console.log("Pas triée!");
      break;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////

const numbers = numbersArray(args);

console.log(numbers);
