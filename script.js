choices = ["pedra", "papel", "tesoura"]

function sort(){
    let randomGet = Math.floor(Math.random() * choices.length);
    let cpuRandom = choices[randomGet];
    return cpuRandom
}

document.getElementById("pedra").onclick = function () {
    let user = choices[0];
    let cpuChoice = sort()
    console.log("cpuChoice:" + cpuChoice);
}

document.getElementById("papel").onclick = function () {
    let user = choices[1];
    let cpuChoice = sort()
    console.log("cpuChoice:" + cpuChoice);
}

document.getElementById("tesoura").onclick = function(){        
    let user = choices[2];
    let cpuChoice = sort()
    console.log("cpuChoice:" + cpuChoice);    
}
