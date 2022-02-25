"use strict";


let destination = ["Aruba", "Spain", "Germany", "Jamacia"];

function destinationTrip(choiceTrip) {
  return choiceTrip[Math.floor(Math.random()*choiceTrip.length)];
    

}

let tripChoice = destinationTrip(destination);


let resturant = ["Ruth Chris Steak House", "The Melting Pot", "Fahrenheit 132", "The Capital Grille"];

function resturantTrip(choiceResturant) {
  return choiceResturant[Math.floor(Math.random()*choiceResturant.length)];

}

let resturantChoice = resturantTrip(resturant);


//  alert(`
//  Below is your randomly generated trip!!!   

//         Destination: ${tripChoice}
//         Resturant: ${resturantChoice}
//         Transportation: ${tripChoice}
//         Entertainment: ${tripChoice}`); 

