// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
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
    document.getElementById("pilotStatus").textContent = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").textContent = `Co-pilot ${copilot} is ready for launch`;

    //Updating Shuttle Requirements
    if (parseInt(fuelLevel) < 10000 && parseInt(cargoLevel) >= 10000) {
        document.getElementById("fuelStatus").textContent = "Fuel level too low for launch";
        document.getElementById("cargoStatus").textContent = "Cargo mass too heavy for launch";
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";
        return;
    } else if (parseInt(fuelLevel) < 10000 && parseInt(cargoLevel) < 10000){
        document.getElementById("fuelStatus").textContent = "Fuel level too low for launch";
        document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch";
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";
        return;
    } else if (parseInt(fuelLevel) >= 10000 && parseInt(cargoLevel) >= 10000){
        document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch";
        document.getElementById("cargoStatus").textContent = "Cargo mass too heavy for launch";
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";
        return;
    } else {
        document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch";
        document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch";
        document.getElementById("launchStatus").textContent = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = "green";
        return;
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;



// document.getElementById("pilotStatus").textContent = `Pilot ${pilot} is ready for launch`;
// document.getElementById("copilotStatus").textContent = `Co-pilot ${copilot} is ready for launch`;

// if (parseInt(fuelLevel) < 10000) {
//     document.getElementById("fuelStatus").textContent = "Fuel level too low for launch";
//     document.getElementById("faultyItems").style.visibility = "visible";
//     document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
//     document.getElementById("launchStatus").style.color = "red";
//     return;
// } else {
//     document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch";
// }
// if (parseInt(cargoLevel) > 10000) {
//     document.getElementById("cargoStatus").textContent = "Cargo mass too heavy for launch";
//     document.getElementById("faultyItems").style.visibility = "visible";
//     document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
//     document.getElementById("launchStatus").style.color = "red";
//     return;
// } else {
//     document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch";
// }
// document.getElementById("launchStatus").textContent = "Shuttle is Ready for Launch";
// document.getElementById("launchStatus").style.color = "green";