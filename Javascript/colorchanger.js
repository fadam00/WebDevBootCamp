var button = document.querySelector("button");
var body = document.querySelector("body");

function changeBackground () {

//     if (body.style.background == "white") {
//     body.style.background = "orange";
//     } else {
//     body.style.background = "white";
//     }
// }

//Using .toggle -- toggle between class names such as CSS classes

body.classList.toggle("orange");

}

button.addEventListener("click", changeBackground);