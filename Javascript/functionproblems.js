//Function Exercises

//Exercise 1

function isEven(num){
    if (num % 2 == 0){

        return true;
    } 
    
    else {

        return false;
        
    }
}

//Exercise 2

function factorial(num){

    var result = 1;

    for (var i = num; i >= num; i--){

    num *= i;

    

    }

    return num;

}

//Exercise 3

function kebabToSnake(str){

    newStr = str.replace(/-/g,"_");
    return newStr;
}