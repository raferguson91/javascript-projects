// Initialize Variables below

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 17;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit =86000;
let fuelTempCelsius = 150;
let minimumFuelTemp = -300;
let maxiumumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7);
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready");
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= maximumMassLimit);
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maxiumumFuelTemp);
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100");
// add logic below to verify the weather status is clear
if (weatherStatus === "clear");
// Verify shuttle launch can proceed based on above conditions
if (astronautCount <= 7 && astronautStatus === "ready" && totalMassKg <= maximumMassLimit && fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maxiumumFuelTemp
    && fuelLevel === "100" && weatherStatus === "clear") {
        preparedForLiftOff = true 
    } else {
        preparedForLiftOff = false
    }
if (preparedForLiftOff = true) {
      console.log("All conditions are met. Initiating space shuttle launch sequence.");
      console.log("------------------------------------------------------------------");
      console.log("Date: " + date);
      console.log("Time: " + time);
      console.log("Astronaut Count: " + astronautCount);
      console.log("Crew Mass: " + crewMassKg + "kg");
      console.log("Fuel Mass: " + fuelMassKg + "kg");
      console.log("Shuttle Mass: " + shuttleMassKg + "kg");
      console.log("Total Mass: " + totalMassKg + "kg");
      console.log("Fuel Temperature: " + fuelTempCelsius + "C");
      console.log("Weather Status: " + weatherStatus);
      console.log("---------------------------------------------");
      console.log("Launch Set, have a great trip!");
    } else if (preparedForLiftOff === false) {
        console.log("Conditions are unfavorable. Launch is shutting down.");
        console.log("-----------------------------------------------------");
        console.log("Date: " + date);
        console.log("Time: " + time);
        console.log("Astronaut Count: " + astronautCount);
        console.log("Crew Mass: " + crewMassKg + "kg");
        console.log("Fuel Mass: " + fuelMassKg + "kg");
        console.log("Shuttle Mass: " + shuttleMassKg + "kg");
        console.log("Total Mass: " + totalMassKg + "kg");
        console.log("Fuel Temperature: " + fuelTempCelsius + "C");
        console.log("Weather Status: " + weatherStatus);
        console.log("---------------------------------------------")
        console.log("Abort Mission! Do not launch!");
        
    }