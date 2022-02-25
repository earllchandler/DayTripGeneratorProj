"use strict";


let destination = ["Aruba", "Spain", "Germany", "Jamacia"];

function destinationTrip(choiceTrip) {
  return choiceTrip[Math.floor(Math.random()*choiceTrip.length)];
    

}

let tripChoice = destinationTrip(destination);

//  alert(`
//  Below is your randomly generated trip!!!   

//         Destination: ${tripChoice}
//         Resturant: ${tripChoice}
//         Transportation: ${tripChoice}
//         Entertainment: ${tripChoice}`); 