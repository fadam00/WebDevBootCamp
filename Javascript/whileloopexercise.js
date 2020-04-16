//While Loops Exercise

//Variables

var num1;
var num2;
var num3;
var num4;
var num5;
var num6;

//While Loop

num1 = 1;

while (num1 <= 10) {

    console.log(num1);
    num1 += 2;
}

num2 = 1;

while (num2 <= 20) {
    if(num2 % 4 === 0){
        console.log(num2);
    }

    num2++;
}

num3 = -10;

while (num3 <= 19){
    console.log(num3);
    num3++;
}

num4 = 10;
while (num6 <= 40){
    if (num4 % 2 === 0){
    console.log(num4);
    }
    num4++;
}

num5 = 300;
while (num5 <= 333){
    if(num5 % 2 != 0){
    console.log(num5);
    }
    num5++;
}

num6 = 5;
while (num6 <= 50){
    if (num6 % 3 === 0 && num6 % 5 === 0){
    console.log(num6);
    }
    num6++;
}

