//Annoy-o-matic -- Keeps asking until it gets response it wants!

//Variables
var userResponse;
var isCorrect;

//Loop

userResponse = prompt("Are we there, yet?");
isCorrect = False;

while ( !userResponse.includes("yes") ){
        if (userResponse.includes("yes")) {

            alert("Yay, we made it!");
        
    }

    else {

        userResponse = prompt("Are we there, yet?");
    }

    isCorrect = False;
}