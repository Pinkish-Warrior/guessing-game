'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

const displyMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is not suitable input
  if (!guess) {
    displyMessage(`⛔️ No a valid number`);

    // when player wins
  } else if (guess === secretNumber) {
    displyMessage('Correct number! 🎉');
    document.querySelector('.number').textContent = secretNumber;
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is to high
  } else if (guess > secretNumber) {
    displyMessage('⬇️ try a lower number!!');
    score--;
    document.querySelector('.score').textContent = score;
    if (score > 0) {
      displyMessage('⬇️ try a lower number!!');
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displyMessage('❌ Sorry, you have lost this game, Try again!!');
    }
    // when guess is too low
  } else if (guess < secretNumber) {
    displyMessage('⬆️ try a higher number!!');
    score--;
    document.querySelector('.score').textContent = score;
    if (score > 0) {
      displyMessage('⬆️ try a higher number!!');
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displyMessage('❌ Sorry, you have lost this game, Try again!!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
