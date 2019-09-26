function sort(){
    const choices = ["papel", "pedra", "tesoura"]
    let randomGet = Math.floor(Math.random() * choices.length);
    let cpuRandom = choices[randomGet];
    return cpuRandom
}

function selecionar(evt){
    let userChoice = evt.target.getAttribute("id")  
    let cpuChoice = sort();
    document.getElementById("cpu").innerHTML = "<img id='img_cpu' src = 'src/img/"+cpuChoice +".png'>";
    judge(userChoice,cpuChoice)
}

function judge(userChoice, cpuChoice){
    let txt = document.getElementById("msg")
    
    if (userChoice === cpuChoice){
        txt.innerHTML = "<h2> Empate </h2>";
        txt.style.backgroundColor = "#FFD043"; 
    }
    if ((userChoice === "pedra" && cpuChoice === "papel") || (userChoice == "papel" && cpuChoice === "tesoura" ) ||(userChoice === "tesoura" && cpuChoice === "pedra")) {
        txt.innerHTML = "<h2> CPU ganhou </h2>"; 
        txt.style.backgroundColor = "red";
    }
    if ((userChoice === "pedra" && cpuChoice === "tesoura") || (userChoice == "papel" && cpuChoice === "pedra" ) ||(userChoice === "tesoura" && cpuChoice === "papel")) {
        txt.innerHTML = "<h2> Você ganhou </h2>";  
        txt.style.backgroundColor = "green";    
    }
}