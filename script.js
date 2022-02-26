"use strict";

// Destination Function

let destination = ["Aruba", "Spain", "Germany", "Jamacia", "Bermuda", "Canada"];

function destinationTrip(choiceTrip) {
  return choiceTrip[Math.floor(Math.random()*choiceTrip.length)];
    

}

let tripChoice = destinationTrip(destination);

// Resturant Function


let resturant = ["Ruth Chris Steak House", "The Melting Pot", "Fahrenheit 132", "The Capital Grille", "Mortons"];

function resturantTrip(choiceResturant) {
  return choiceResturant[Math.floor(Math.random()*choiceResturant.length)];

}

let resturantChoice = resturantTrip(resturant);


// Transportation Function

let transportation = ["Airplane", "Cruise", "Train", "Bus", "Subway"]



function transportationTrip(choiceTransportation) {
  return choiceTransportation[Math.floor(Math.random()*choiceTransportation.length)];

}

let transportationChoice = transportationTrip(transportation);


// Entertainment Function

let entertainment = ["Night Club", "Concert", "Historic Tour", "Beach", "Theater"];



function entertainmentTrip(choiceEntertainment) {
  return choiceEntertainment[Math.floor(Math.random()*choiceEntertainment.length)];

}

let entertainmentChoice = entertainmentTrip(entertainment);


        alert(`
        Below is your randomly generated trip!!!   
       
               Destination: ${tripChoice}
               Resturant: ${resturantChoice}
               Transportation: ${transportationChoice}
               Entertainment: ${entertainmentChoice}`);


// while loop for printing final trip itenerary

function secondChoices(){

let continueIteration = true;

while(continueIteration === true) {
  let userInput = prompt("Are you satisfied with your generted trip? YES or NO")
    if(userInput.toLocaleUpperCase() === 'YES'){
      alert(`
      Your trip has been finalized!!! Have a great stay!   
     
             Destination: ${tripChoice}
             Resturant: ${resturantChoice}
             Transportation: ${transportationChoice}
             Entertainment: ${entertainmentChoice}`);
        continueIteration = false;


    }

    else if(userInput.toLocaleUpperCase() === 'NO'){
      let changeSelection = prompt(`
       Which feature would you like to change? 
        Press 1 for Destination 
        Press 2 for Restaurant 
        Press 3 for Transportation 
        Press 4 for Entertainment`
      );

switch(changeSelection) {
    case "1":
      alert(`
      Below is your updated randomly generated trip!!!   
     
             Destination: ${destinationTrip(destination)}
             Resturant: ${resturantChoice}
             Transportation: ${transportationChoice}
             Entertainment: ${entertainmentChoice}`);

             tripChoice = destinationTrip(destination);
        break;
    case "2":
      alert(`
      Below is your updated randomly generated trip!!!   
     
             Destination: ${tripChoice}
             Resturant: ${resturantTrip(resturant)}
             Transportation: ${transportationChoice}
             Entertainment: ${entertainmentChoice}`);
        break;
    case "3":
      alert(`
      Below is your updated randomly generated trip!!!   
     
             Destination: ${tripChoice}
             Resturant: ${resturantChoice}
             Transportation: ${transportationTrip(transportation)}
             Entertainment: ${entertainmentChoice}`);
        break;
    case "4":
      alert(`
      Below is your updated randomly generated trip!!!   
     
             Destination: ${tripChoice}
             Resturant: ${resturantChoice}
             Transportation: ${transportationChoice}
             Entertainment: ${entertainmentTrip(entertainment)}`);
        break;

        
    }


    }

  }

}