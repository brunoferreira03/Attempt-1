import {resourceData} from './resources.js'

var villageData = {
    population: 3,
    beds: 5,
}
var resources = resourceData

function increasePopulation(){
    villageData.population += 1;
}


// Loops

var gainPopulationLoop = window.setInterval(function(){
    // gaining population should check for a couple conditions
    // making sure that the increase is stable and possible
    
    
    
    increasePopulation()
}, 5000)

var villageEatLoop = window.setInterval(function(){
    // Every 10 seconds, drain the food necessary to keep villagers alive.
    // Villagers that don't eat die, meaning that the amount of food neeeds to stay
    // at a specific level above the villager amount

    // get needed value to survive the cycle
    var foodNeeded = villageData.population * 3;

    // verify the food needed to survive the cycle
    if (foodNeeded <= resourceData.food) {
        resourceData.food -= foodNeeded;
    }
    else if(foodNeeded > resourceData.food){
    

    }
}, 10000)

var matchValues = window.setInterval(function(){
    document.getElementById("villagerCount").innerHTML = villageData.population + " with " + resources.stone + " available";
}, 1000)
