'use strict';

// ALERT
//DOM manipulation introduction:

// const messageSelector = document.querySelector('.message');
// console.log(messageSelector);
/*
console.log(document.querySelector('.message').textContent);

console.log(
  (document.querySelector('.message').textContent = 'Correct number! 🎉')
);

console.log((document.querySelector('.number').textContent = 13));
console.log((document.querySelector('.score').textContent = 10));
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// IMPORTANT
// Events Listeners:

// const number = Math.floor(Math.random() * 20 + 1);

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
    // document.querySelector('.message').textContent = `⛔️ No a valid number`;
    displyMessage(`⛔️ No a valid number`);
    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct number! 🎉';
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
    // document.querySelector('.message').textContent = '⬇️ try a lower number!!
    displyMessage('⬇️ try a lower number!!');
    score--;
    document.querySelector('.score').textContent = score;
    if (score > 0) {
      // document.querySelector('.message').textContent =
      //   '⬇️ try a lower number!!';
      displyMessage('⬇️ try a lower number!!');
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      // document.querySelector('.message').textContent =
      //   '❌ Sorry, you have lost this game, Try again!!';
      displyMessage('❌ Sorry, you have lost this game, Try again!!');
    }
    // when guess is too low
  } else if (guess < secretNumber) {
    // document.querySelector('.message').textContent = '⬆️ try a higher number!!';
    displyMessage('⬆️ try a higher number!!');
    score--;
    document.querySelector('.score').textContent = score;
    if (score > 0) {
      // document.querySelector('.message').textContent =
      //   '⬆️ try a higher number!!';
      displyMessage('⬆️ try a higher number!!');
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displyMessage('❌ Sorry, you have lost this game, Try again!!');
      // document.querySelector('.message').textContent =
      //   '❌ Sorry, you have lost this game, Try again!!';
    }
  }
});

// implementing the logic
// three scenarios:
// number check is not a number
// number check === guess
// number check != guess
// number > 20
// number < 1

console.log(secretNumber);

// Coding Challenge #1
/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

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

// TODO
// Refractoring the above code

// this line of code 'document.querySelector('.message').textContent' has been used over 5 times in the above code. It can certainly be refactored!

// a function has been creted for this purpose. See bellow(2 types):

// arrow function
// displyMessage =  message => {
//   document.querySelector('.message').textContent = message;
// }

// declaration function
// displyMessage =  function(message){
// document.querySelector('.message').textContent = message;
// }
