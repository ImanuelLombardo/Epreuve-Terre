"use strict"

// Créer un programme qui affiche les arguments qu'il reçoit ligne par ligne, peu importe le nombre d'arguments.$

const argv = process.argv;

// Afficher les arguments
argv.forEach((val, index)=> {
  console.log(`${index}: ${val}`);
});
