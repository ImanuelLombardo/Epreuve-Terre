"use strict"

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Créez un programme qui transforme une heure affichée en format 24h en une heure affichée en format 12h.
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exemples d’utilisation:
// $ > ruby exo.rb 23: 40
// 11: 40PM
// Attention: midi et minuit.
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Récupérer les chiffres et initialisation variables
const time = process.argv;
let hour = time[2][0] + time[2][1];
let min = time[3];
let partTime = "";
let nbrArg = 0;

// Nbr d'argument
do {
  nbrArg++
} while(time[nbrArg] !== undefined);

// Controle si format heure bien écrit (xx: xx)
if(nbrArg === 4 && hour.length === 2 && min.length === 2 && time[2][2] === ":") {
  // Transformer hour et min en nombre
  hour = parseInt(time[2][0] + time[2][1]);
  min = parseInt(time[3]);

  // Mettre AM et PM au bon endroit et transformer heure en PM
  if(hour >= 0 && hour <= 11) {
    partTime = "AM";
    hour = hour;

  } else if(hour === 12) {
    partTime = "PM";
    hour = hour;

  } else if(hour >= 13 && hour <= 23) {
    partTime = "PM";

    switch (hour) {
      case 13:
        hour = 1;
        break;

      case 14:
        hour = 2;
        break;

      case 15:
        hour = 3;
        break;

      case 16:
        hour = 4;
        break;

      case 17:
        hour = 5;
        break;

      case 18:
        hour = 6;
        break;

      case 19:
        hour = 7;
        break;

      case 20:
        hour = 8;
        break;

      case 21:
        hour = 9;
        break;

      case 22:
        hour = 10;
        break;

      case 23:
        hour = 11;
        break;

      default:
        break;
    }
  }

  // Afficher le 0 quand il le faut
  if(hour >= 0 && hour <= 9) {
    if(min >= 0 && min <= 9) {
      console.log(`0${hour}: 0${min}${partTime}`)
    } else {
      console.log(`0${hour}: ${min}${partTime}`);
    }

  } else {
    if (min >= 0 && min <= 9) {
      console.log(`${hour}: 0${min}${partTime}`);
    } else {
      console.log(`${hour}: ${min}${partTime}`);
    }
  }
} else {
  console.log("Le format horaire utiliser n'est pas le bon réessayer. (xx: xx)")
}
