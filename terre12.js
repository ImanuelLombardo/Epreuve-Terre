"use strict"

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Créez un programme qui transforme une heure affichée en format 12h en une heure affichée au format 24h.
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exemples d’utilisation:
///////////////////////////
// $ > ruby exo.rb 11: 40PM
// 23: 40
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Variables
const rawTime = process.argv;
let hour = parseInt(rawTime[2][0] + rawTime[2][1]);
let min = parseInt(rawTime[3][0] + rawTime[3][1]);
let partTime = rawTime[3][2] + rawTime[3][3];
const separator = ":";
let nbrArg = 0;

// Calculer le nbr d'argument
do {
  nbrArg++;
} while(rawTime[nbrArg] !== undefined);

// Controle format horaire (xx: xxAM)
if (nbrArg === 4 && hour.toString().length === 1 || hour.toString().length === 2 && rawTime[2][2] === separator && min.toString().length === 1 || min.toString().length === 2 && rawTime[3][2] === "P" || rawTime[3][2] === "A" && rawTime[3][3] === "M") {
  // Règle pour PM
  if (partTime === "PM") {
    if(hour === 12) {
      hour = hour;
      console.log(`${hour}: 0${min}`);

    } else if(hour > 0 && hour < 12) {
      switch (hour) {
        case 1:
          hour = 13;
          break;

        case 2:
          hour = 14;
          break;

        case 3:
          hour = 15;
          break;

        case 4:
          hour = 16;
          break;

        case 5:
          hour = 17;
          break;

        case 6:
          hour = 18;
          break;

        case 7:
          hour = 19;
          break;

        case 8:
          hour = 20;
          break;

        case 9:
          hour = 21;
          break;

        case 10:
          hour = 22;
          break;

        case 11:
          hour = 23;
          break;

        case 12:
          hour = 12;
          break;

        default:
          break;
      }
      console.log(`${hour}: 0${min}`);
    };

  // Règle pour AM
  } else if(partTime === "AM") {
    if (hour === 12){
      hour = 0;
      console.log(`0${hour}: 0${min}`);

    } else if (hour > 0 && hour < 10) {
      hour = hour;
      console.log(`0${hour}: 0${min}`);
    } else if (hour > 9 && hour < 12){
      hour = hour;
      console.log(`${hour}: 0${min}`);
    }
  };
} else {
  console.log("Erreur votre format d'heure n'est pas correct. (xx: xxAM)");
}
