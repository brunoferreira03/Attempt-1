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
    document.getElementById("foodCount").innerHTML = resourceData.food + "Food";
}

function gainWood(){
    resourceData.wood += resourceRates.woodPerTick;
    document.getElementById("woodCount").innerHTML = resourceData.wood + "Wood";
}

function gainStone(){
    resourceData.stone += resourceRates.stonePerTick;
    document.getElementById("stoneCount").innerHTML = resourceData.food + "Stone";
}

var gainResourceLoop = window.setInterval(function(){
    gainFood()
    gainWood()
    gainStone()

}, 1000)


export {resourceData}