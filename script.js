choices = ["papel", "pedra", "tesoura"]

function sort(){
    let randomGet = Math.floor(Math.random() * choices.length);
    let cpuRandom = choices[randomGet];
    return cpuRandom
}

document.getElementById("papel").onclick = function () {
    let userChoice = choices[0];
    let cpuChoice = sort()
    console.log("cpuChoice:" + cpuChoice);
    judge(userChoice,cpuChoice)
//    document.getElementById("cpu").innerHTML = "<img src = '"+choices[cpuChoice] +".png'>"
}

document.getElementById("pedra").onclick = function () {
    let userChoice = choices[1];
    let cpuChoice = sort()
    console.log("cpuChoice:" + cpuChoice);
    judge(userChoice,cpuChoice)
    
}

document.getElementById("tesoura").onclick = function(){        
    let userChoice = choices[2];
    let cpuChoice = sort()
    console.log("cpuChoice:" + cpuChoice);    
    judge(userChoice,cpuChoice)
}

function judge(userChoice, cpuChoice){
    if (userChoice === cpuChoice){
        console.log("empate");        
    }
    if ((userChoice === "pedra" && cpuChoice === "papel") || (userChoice == "papel" && cpuChoice === "tesoura" ) ||(userChoice === "tesoura" && cpuChoice === "pedra")) {
        console.log("cpu ganhou");        
    }
    if ((userChoice === "pedra" && cpuChoice === "tesoura") || (userChoice == "papel" && cpuChoice === "pedra" ) ||(userChoice === "tesoura" && cpuChoice === "papel")) {
        console.log("user ganhou");        
    }
}