var todos = ["Buy new turtle"];
window.setTimeout(function(){

    var input = prompt("What would you like to do?");

    while (input !== "quit"){

            if(input === "list"){
                listTasks();

            } else if (input === "new"){
                addTask();
 
            } else if (input === "delete"){
                deleteTask();
            }
    
        input = prompt("What would you like to do?");

    }

    console.log("Ok, you quit the App");

    function listTasks(){

        console.log("**************")
        todos.forEach(function(todo, i){ //1st argument is the item in the array, 2nd arguments is the index of the item
            console.log(i + ": " + todo);
        });
        console.log("**************");

    }

    function addTask(){
        var newTask = prompt("Enter new task");
        todos.push(newTask);
        console.log("Added task");
    }

    function deleteTask(){
        var index = prompt("Enter index of task to delete");
        todos.splice(index,1) //1st argument what index you'd like to start deleting from. 2nd argument how many items to delete after index entered.
        console.log("Deleted task");
    }


}, 1000);