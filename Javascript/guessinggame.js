//Guessing Game - Guess the correct number between 1 and 10!

//Variables 

var userNumber;
var computerNumber = Math.round(Math.random() * 10); //Generates random number between 1 and 10 and rounds to the nearest whole number.

//Guessing Game

userNumber = prompt("Guess a number from 1 to 10...");

if (userNumber == computerNumber){

    alert("You've won!");
} 

else {

    alert("Try again...");
}

