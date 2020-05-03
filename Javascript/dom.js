var button = document.querySelector("button");
var paragraph = document.querySelector("p");

//Setup Click Listener

button.addEventListener("click", function () {
    paragraph.textContent = "Someone clicked me!"
});



