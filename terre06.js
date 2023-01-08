"use strict"

// Créez un programme qui affiche l’inverse de la chaîne de caractères donnée en argument.

// Récupérer tous les arguments
const argStr = [];
process.argv.forEach((val, index) => {
  argStr.push(val)
});

// Inverser les charactères
let inline = "";
if(argStr.length < 3){
  console.log("Doesn't have argument");
} else {
  for(let i = 2; i < argStr.length; i++) {
    for(let y = argStr[i].length - 1; y >= 0; y--) {
      inline += argStr[i][y] + "";
    };
    inline += " ";
  }
};
console.log(inline);
