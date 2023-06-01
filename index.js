function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}

function handleButtonClick() {
    var randomNumber1 = rollDice();
    var randomNumber2 = rollDice();

    var dicePlayer1 = document.getElementById('img1');
    var dicePlayer2 = document.getElementById('img2');


    dicePlayer1.src = './images/dice' + randomNumber1 +'.png';
    dicePlayer2.src = './images/dice' + randomNumber2 +'.png';

    var heading = document.getElementById('heading');

    if (randomNumber1 === randomNumber2) {
        heading.innerText = "Draw!!!";
    } else if (randomNumber1 > randomNumber2) {
        heading.innerText = "Player One Wins!!!"
    } else {
        heading.innerText = "Player Two Wins!!!"
    }
}

var rollButton = document.getElementById('btn');
rollButton.addEventListener('click', handleButtonClick);