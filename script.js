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
    document.getElementById("cpu").innerHTML = "<img id='img_cpu' src = '"+cpuChoice +".png'>";
    judge(userChoice,cpuChoice)
}

document.getElementById("pedra").onclick = function () {
    let userChoice = choices[1];
    let cpuChoice = sort()
    console.log("cpuChoice:" + cpuChoice);
    document.getElementById("cpu").innerHTML = "<img id='img_cpu' src = '"+cpuChoice +".png'>";
    judge(userChoice,cpuChoice)
    
}

document.getElementById("tesoura").onclick = function(){        
    let userChoice = choices[2];
    let cpuChoice = sort()
    console.log("cpuChoice:" + cpuChoice);  
    document.getElementById("cpu").innerHTML = "<img id='img_cpu' src = '"+cpuChoice +".png'>";  
    judge(userChoice,cpuChoice)
}

function judge(userChoice, cpuChoice){
    if (userChoice === cpuChoice){
        alert("empate");        
    }
    if ((userChoice === "pedra" && cpuChoice === "papel") || (userChoice == "papel" && cpuChoice === "tesoura" ) ||(userChoice === "tesoura" && cpuChoice === "pedra")) {
        alert("cpu ganhou");        
    }
    if ((userChoice === "pedra" && cpuChoice === "tesoura") || (userChoice == "papel" && cpuChoice === "pedra" ) ||(userChoice === "tesoura" && cpuChoice === "papel")) {
        alert("user ganhou");        
    }
}