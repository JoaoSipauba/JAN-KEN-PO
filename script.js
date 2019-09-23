// pedra = 0; papel = 1, tesoura = 2

document.getElementById("pedra").onclick = function () {
    console.log("cliquei na pedra");
    juiz(0)
}

document.getElementById("papel").onclick = function () {
    console.log("clicquei no papel");
    juiz(1)
}

document.getElementById("tesoura").onclick = function(){        
    console.log("cliquei na tesoura");
    juiz(2)
}

function juiz(userChoice) {
    let choices = ["pedra", "papel", "tesoura"]


    console.log(choices[userChoice]);

}