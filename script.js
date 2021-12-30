let playerOne = prompt("Enter the name of player one?").toUpperCase().trim();
let playerTwo = prompt("Enter the name of player two?").toUpperCase().trim();
let players = document.querySelectorAll(".player-name");
//console.log(playerOne, playerTwo, players);
players[0].innerHTML = playerOne;
players[1].innerHTML = playerTwo;

function play(){
    let numberP1 = Math.floor(Math.random()*6+1);
    let numberP2 = Math.floor(Math.random()*6+1);
    let dices = document.querySelectorAll("section div i");
    let firstDiceClass = document.querySelectorAll("section div i")[0].classList[1];
    let secondDiceClass = document.querySelectorAll("section div i")[1].classList[1];
    let diceList = ["fa-dice-one","fa-dice-two","fa-dice-three","fa-dice-four","fa-dice-five","fa-dice-six"];
    let result = document.querySelector(".result-text");
    
    //Counter of player
    let counter = document.querySelectorAll(".player-count");
    
    //removing css class
    dices[0].classList.remove(firstDiceClass);
    dices[1].classList.remove(secondDiceClass);
    
    //adding new css class
    dices[0].classList.add(diceList[numberP1-1]);
    dices[1].classList.add(diceList[numberP2-1]);

    //result
    if(numberP1 == numberP2)
        result.innerHTML = "Draw!!!"
    else if(numberP1 < numberP2){
        result.innerHTML = playerTwo.toUpperCase()+" wins!!!";
        let x = counter[1].innerHTML;
        x++;
        counter[1].innerHTML = x;
    }
        
    else{
        result.innerHTML = playerOne.toUpperCase()+" wins!!!";
        let x = counter[0].innerHTML;
        x++;
        counter[0].innerHTML = x;
    }
        
}