'use strict';

// DOM DOCUMENT OJECT MODEL: structured representation of html documents

// DOM methods and properties for dom manipulation is not a part of javascript
// is WEB APIS and can interact with js

// Me auth thn entolh pernoume to text px apo mia paragrafo
/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 20;


// GIA NA PAROUME TON INPUT FIELD
document.querySelector('.guess').value = 12;*/

// document.querySelector(".check").addEventListener('click', function() {
//     console.log(document.querySelector('.guess').value);

//     document.querySelector('.message').textContent = 'Correct Number!';
// });

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(score);
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// check leitourgia
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('🚩 No number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    // inline style
    document.querySelector('body').style.backgroundColor = '#60b347';
    // the value must be a string
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when quess is too high
  } else if(guess !== secretNumber){
    if (score > 1) {
        guess > secretNumber ?  displayMessage('🚩 Too high!') :  displayMessage('🚩 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        displayMessage('😩 Loose the game!');
        document.querySelector('.score').textContent = 0;
    }
}
  
// }else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '🚩 Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😩 Loose the game!';
//       document.querySelector('.score').textContent = 0;
//     }

//     // when quess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '🚩 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😩 Loose the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
});

//again leitourgia
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
