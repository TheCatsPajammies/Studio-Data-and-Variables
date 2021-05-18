// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
const howManyAstronauts = require('readline-sync');

let date = "Monday 2019-03-18";
let time ="10:05:34 AM";
let astronautCount = howManyAstronauts.question('Enter the number of astronauts going on the mission: ');
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = Number(astronautCount) * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = 1 * 100 + "%";
let weatherStatus = "clear";




// Write code to generate the LC04 report here:
console.log(`-------------------------------------
> LC04 - LAUNCH CHECKLIST
-------------------------------------
Date: ${date}
Time: ${time}

-------------------------------------
> ASTRONAUT INFO
-------------------------------------
* count: ${astronautCount}
* status: ${astronautStatus}

-------------------------------------
> FUEL DATA
-------------------------------------
* Fuel temp celsius: ${fuelTempCelsius} C
* Fuel level: ${fuelLevel}

-------------------------------------
> MASS DATA
-------------------------------------
* Crew mass: ${crewMassKg} kg
* Fuel mass: ${fuelMassKg} kg
* Shuttle mass: ${shuttleMassKg} kg
* Total mass: ${totalMassKg} kg

-------------------------------------
> FLIGHT PLAN
-------------------------------------
* weather: ${weatherStatus}

-------------------------------------
> OVERALL STATUS
-------------------------------------
* Clear for takeoff: YES`);




// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.