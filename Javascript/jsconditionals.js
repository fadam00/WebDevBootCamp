//Testing Conditionals in JS (If/Else)

//Variables

var age;

//Conditionals

age = prompt("How old are you?");

if (age < 0){

    alert("So you're not alive then?");

} 

else if (age == 21){

    alert("Happy 21st!");

} 

else if (age % 2 != 0) {

    alert("I see your age is odd!");

} 

else if (age % Math.sqrt(age) === 0) {

    alert("Your age is a perfect square!");
} 

else {

    alert ("So you're that old, huh...");
}