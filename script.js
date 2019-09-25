// pedra = 0; papel = 1, tesoura = 2

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

function juiz(userChoice) {
    let choices = ["pedra", "papel", "tesoura"]


    console.log(choices[userChoice]);

}