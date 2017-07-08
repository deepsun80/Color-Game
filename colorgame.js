//create array of colors
var colors = generateRandomColors(6);

var squares = document.getElementsByClassName("square");

//pick random color from the array of colors
var pickedColor = pickColor();

var colorDisplay = document.querySelector("#colorDisplay");

//display the randomly picked color
colorDisplay.textContent = pickedColor;

var message = document.getElementById("message");

var easyButton = document.getElementById("easyButton");
var hardButton = document.getElementById("hardButton");

easyButton.addEventListener("click",function() {
    message.textContent = "";
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    });

hardButton.addEventListener("click",function() {
    message.textContent = "";
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
    });

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click", function(){
       var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            message.textContent = "CORRECT!";
            changeColors(clickedColor);
        }
        else {
            this.style.backgroundColor = "#232323";
            message.textContent = "TRY AGAIN";
        }
    });
}

function changeColors(color) {
    for (i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var array = [];
    for (i = 0; i < num; i++) {
        array[i] = random();
    }
    return array;
}

function random() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}