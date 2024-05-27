var resourceData ={
    food: 20,
    wood: 6,
    stone: 8,

}

var resourceRates = {
    foodPerTick: 0,
    woodPerTick: 0,
    stonePerTick: 0,
}

function gainFood(){
    resourceData.food += resourceRates.foodPerTick;
    
}

function gainWood(){
    resourceData.wood += resourceRates.woodPerTick;
    
}

function gainStone(){
    resourceData.stone += resourceRates.stonePerTick;
    
}

var gainResourceLoop = window.setInterval(function(){
    gainFood()
    document.getElementById("foodCount").innerHTML = resourceData.food + " Food";
    gainWood()
    document.getElementById("woodCount").innerHTML = resourceData.wood + " Wood";
    gainStone()
    document.getElementById("stoneCount").innerHTML = resourceData.food + " Stone";

}, 1000)


export {resourceData}