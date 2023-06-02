var diceePix = [ "./images/dice1.png","./images/dice2.png", "./images/dice3.png", "./images/dice4.png",
"./images/dice5.png", "./images/dice6.png"];

function rndInt(dice) {
    var randomNumber1 = Math.floor(Math.random() * diceePix.length);
    document.getElementById("dices").src = diceePix[randomNumber1];
    //
    return randomNumber1
}
let ran1 = rndInt();

function rndInt2(dice) {
    var randomNumber2 = Math.floor(Math.random() * diceePix.length);
    document.getElementById("diice").src = diceePix[randomNumber2];
    // make sure you return the value from your var 
    return randomNumber2
}
// save it in another bucket 
let ran2 = rndInt2();

    if (ran1 === ran2) {
        //document.getElementById("display").innerHTML = "Draw!";
        document.querySelector("h1").innerHTML = "Draw!";
    } else if (ran1 > ran2) {
        //document.getElementById("display").innerHTML = "Computer Wins";
        document.querySelector("h1").innerHTML = "🚩Computer Wins!";
    } else if (ran1 < ran2) {
        document.querySelector("h1").innerHTML = "🚩You win";
    }



 