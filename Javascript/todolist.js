var todos = ["Buy new turtle"];
window.setTimeout(function(){

    var input = prompt("What would you like to do?");

    while (input !== "quit"){

        //handle input
        if(input === "list"){
            console.log(todos);
        } else if (input === "new"){
        //ask for new task
            var newTask = prompt("Enter new task");
        //add task to array
            todos.push(newTask);
        }

        //ask again for new input
        input = prompt("What would you like to do?");

    }

    console.log("Ok, you quit the App");


}, 500);