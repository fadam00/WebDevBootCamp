//Array Methods

//Push and Pop
//Use Push to ADD an element to the end of the array

color = [];
color.push("indigo");

// Use Pop to remove the last element of the array

color = ["indigo", "red"];
color.pop();
//removes "red";

//Shift and Unshift
//Same as push and pop but to the first item of the array
color.unshift("infrared"); // Adds the item
color.shift(); // Removes first element.

//IndexOf finds the index of an item in an array

friends = ["Mattias", "Julie", "Ralph"];
friends.IndexOf("Mattias");
//Returns -1 if the element is NOT present.

//Slice copies parts of an array
//Takes 2 arguments which represent where to START the cut and where the END the cut

fruits = ["strawberry", "mangoes", "orange", "lemon"];

var citrus = fruits.slice(3,4);

//Array Exercises
//Nested Arrays
var friendGroups = [
    ["Harry", "Ron", "Hermione"],
    ["Malfoy", "Crabbe", "Goyle"],
    ["Mooney", "Wormtail", "Prongs"]
];

console.log(friendGroups[2][0]) // returns "Mooney"




