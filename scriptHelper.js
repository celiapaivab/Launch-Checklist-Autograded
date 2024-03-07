// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
    */
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //Adding Alerts
    let pilotValidation = validateInput(pilot);
    let copilotValidation = validateInput(copilot);
    let fuelValidation = validateInput(fuelLevel);
    let cargoValidation = validateInput(cargoLevel); 

    if (pilotValidation === "Empty" || copilotValidation === "Empty" || fuelValidation === "Empty" || cargoValidation === "Empty") {
        alert("All fields are required!");
        return;
    }
    if (pilotValidation === "Is a Number" || copilotValidation === "Is a Number" || fuelValidation === "Not a Number" || cargoValidation === "Not a Number") {
        alert("Invalid input!");
        return;
    }
    //Updating Shuttle Requirements
    document.getElementById("pilotStatus").textContent = `Pilot ${pilot} Ready`;
    document.getElementById("copilotStatus").textContent = `Co-pilot ${copilot} Ready`;

    if (fuelLevel < 10000) {
        document.getElementById("fuelStatus").textContent = "Fuel level not enough for the journey";
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").textContent = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
        return;
    } else if (cargoLevel > 10000) {
        document.getElementById("cargoStatus").textContent = 'Cargo mass too high for launch';
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").textContent = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
        return;
    } else {
        document.getElementById("launchStatus").textContent = "Shuttle is ready for launch";
        document.getElementById("launchStatus").style.color = "green";
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;