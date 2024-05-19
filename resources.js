var resourceData ={
    stone: 7,
}

function gainStone(){
    resourceData.stone += 1;
}

var gainStoneLoop = window.setInterval(function(){
    gainStone()
    document.getElementById("stoneCount").innerHTML = resourceData.stone;
}, 1000)

export {resourceData}