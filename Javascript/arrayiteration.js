//For Loops

var colors = ["red", "blue", "black"];

for(var i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

//forEach -- Built-in method to loop through array
// arr.forEach(someFunction)

colors.forEach(function(color){
    //color is a placeholder for each element in the 'colors' array, call it whatever you want
    console.log(color);
})


