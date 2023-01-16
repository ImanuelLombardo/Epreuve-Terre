"use strict"

// Créez un programme qui affiche l’inverse de la chaîne de caractères donnée en argument.

// Récupérer tous les arguments
const argStr = [];
process.argv.forEach((val, index) => {
  argStr.push(val)
});

// Inverser les charactères
let inline = "";
if(length(argStr) < 3){
} else {
  for(let i = 2; i < length(argStr); i++) {
    for(let y = length(argStr[i]) - 1; y >= 0; y--) {
      inline += argStr[i][y] + "";
    };
    inline += " ";
  }
};
console.log(inline);

// Fonction
function length(arr) {
  let count = 0;

  do{
    count++;
  } while(arr[count] !== undefined);

  return count;
};
