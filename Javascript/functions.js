//Functions are reusabe chunks of code (20 line limit) in Javascript
//Example

function singASong(){
    console.log("Twinkle, twinkle little star");
    console.log("Something, something that you are");
}

singASong();

//Arguments -- Input for a given function

function square(num) {
    console.log(num * num);
}

square(10);
square(8);

function sayHello(name) {

    console.log("Hi there, " + name + ".");

}

//Return keyword -- Capture the value that comes back out of the function. Used to use the result of a function outside of a function.
//Example
 function capitalize(str) {
     if(typeof str == "number"){
         return "That's not a string!"}
         else{
     return str.charAt(0).toUpperCase() + str.slice(1);
         }
 }

 //Function Declaration
 function capitalize(str) {
     //Execute Code
 }

 //Function Expression
 var capitalize = function (str){
     //Execute code
 }