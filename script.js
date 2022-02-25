"use strict";

// Destination Function

let destination = ["Aruba", "Spain", "Germany", "Jamacia"];

function destinationTrip(choiceTrip) {
  return choiceTrip[Math.floor(Math.random()*choiceTrip.length)];
    

}

let tripChoice = destinationTrip(destination);

// Resturant Function


let resturant = ["Ruth Chris Steak House", "The Melting Pot", "Fahrenheit 132", "The Capital Grille"];

function resturantTrip(choiceResturant) {
  return choiceResturant[Math.floor(Math.random()*choiceResturant.length)];

}

let resturantChoice = resturantTrip(resturant);


// Transportation Function

let transportation = ["Airplane", "Cruise", "Train"]



function transportationTrip(choiceTransportation) {
  return choiceTransportation[Math.floor(Math.random()*choiceTransportation.length)];

}

let transportationChoice = resturantTrip(transportation);


//  alert(`
//  Below is your randomly generated trip!!!   

//         Destination: ${tripChoice}
//         Resturant: ${resturantChoice}
//         Transportation: ${transportationChoice}
//         Entertainment: ${tripChoice}`); 

