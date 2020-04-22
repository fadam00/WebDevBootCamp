// Objects - Store data in key-value pairs

var person ={

    name: "Travis",
    age: 22,
    city: "LA"
}

console.log(person.name); // Acces data using dot notation
console.log(person["name"]) // Access data using brackets

//Updating objects
person.name = "Julie";
person.age = 34;

//Creating objects
var person = {};
person.name = "Travis";
person.age = 21;

var person ={

    name: "Travis",
    age: 22,
    city: "LA"
}

//Objects can hold all sorts of data

var junkObject = {
    age: 57,
    color: "purple",
    isHungry: true,
    friends: ["Herman", "Rosa", "Peter"],
    pet: {

        name: "Rusty",
        species: "dog",
        age: 2
    }
};

console.log(junkObject);