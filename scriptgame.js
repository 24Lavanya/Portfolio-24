'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
let score = 20;
let highscore = 0;
const printMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess){
        printMessage('⛔ No number');
    }else if (guess == secretNumber) {
        printMessage('Yay! You won🎉🎉');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        // document.body.style.background = "url('pexels-pixabay-433452.jpg')";
        // document.body.style.backgroundSize = "auto 100% 100% cover";
        if (score > highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
            }
    }
    else if (guess !== secretNumber) {
        if (score > 1){
            printMessage((guess > secretNumber) ? '📈too high' : '📉too low'); 
            score--;
            document.querySelector('.score').textContent = score;    
        }
        else {
            printMessage('Game Over');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor='rgb(205, 45, 45)'
        }
    }
});
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    printMessage('🤔Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
});