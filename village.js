import {resourceData} from './resources.js'

var villageData = {
    population: 3,
}
var resources = resourceData

function increasePopulation(){
    villageData.population += 1;
}

var gainPopulationLoop = window.setInterval(function(){
    increasePopulation()
}, 5000)

var matchValues = window.setInterval(function(){
    document.getElementById("villagerCount").innerHTML = villageData.population + " with " + resources.stone + " available";
}, 1000)
