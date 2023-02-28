"use strict";
/*global console*/
// eslint-disable-line no-console
/*jslint node: true*/

//let mess1 = document.querySelector(".guess");

/* let myNumber = function() {
  console.log(mess.value); */
//}
let sNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;
let theHs = document.querySelector('.highscore');
let theScore = document.querySelector('.score');
let mess1 = document.querySelector('.message');
let numBox = document.querySelector('.numbers');

document.querySelector('.btn').addEventListener ('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  //When there is no input
  if (!guess) {
    mess1.textContent = '⛔ Not a number';
  //when a player wins
  } else if (guess === sNumber) {
     mess1.textContent = 'You guessed correct! 🥳';
     numBox.style.backgroundColor = '#ff9000';
     document.querySelector('.numbers').textContent = sNumber;
     if (score >= highscore) {
       highscore = score;
       theHs.textContent = score;
  }
  //when a player guesses too high   
} else if (guess > sNumber) {
  if (score > 1) {
    mess1.textContent = '📈 Too high';
    score--;
    theScore.textContent = score;
} else {
    mess1.textContent = 'You just lost the game. 😭';
    theScore.textContent = 0;
 }
}
  //when a player guesses to low or loses
   else if (guess < sNumber) {
   if (score > 1) {
     mess1.textContent = '📉 Too low';
     score--;
     theScore.textContent = score;
   } else {
      mess1.textContent = 'You just lost the game. 😭';
      theScore.textContent = 0;
   }
}
});

document.querySelector('.newbtn').addEventListener('click', function() {
  if (score >= theHs) {
    theHs.textContent = score;
  }
  score = 20;
  sNumber = Math.trunc(Math.random()*20) + 1;
  mess1.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  numBox.textContent = '?';
  numBox.style.backgroundColor = '#9CFF00'
});




