// THIS IS MY JS FILE WHERE I WILL BE WRITING MY JAVASCRIPT CODE

// refers to our container div in our index.html file
let container = document.getElementById("container");

// createSquare function creates 16x16 divs which is 256 lines of divs
function createSquares() {
for (let i = 0; i < 256; i++) {
// create squares & adds them to the html grid container
let square = document.createElement("div");
// set style attributes to square divs
square.style.backgroundColor = 'white';
//square.style.border = '1px solid #000';
square.style.width = '40px';
square.style.height = '40px';
container.appendChild(square);
}
}

// changes the divs we hover over to GRAY
// js event listener for mouseover hover effect
let gridContainer = document.getElementById("container");
gridContainer.addEventListener("mouseover", function( event ) {
event.target.style.backgroundColor = "gray";
});


// when user clicks COLOR MODE button, changes the divs we hover over to GRAY
let grayBtn = document.getElementById("gray");
grayBtn.addEventListener('click', function () {
    gridContainer.addEventListener("mouseover", function ( grayEvent ) {
        grayEvent.target.style.backgroundColor = "gray";
    })
});

// random color function generator
function randomColors () {
let randomColor = Math.floor(Math.random()*16777215).toString(16);
return "#" + randomColor;
};

// when user clicks RAINBOW MODE button, changes the divs we hover over to random colors using randomColors function
let rainbowBtn = document.getElementById("rainbow");
rainbowBtn.addEventListener('click', function () {
    gridContainer.addEventListener("mouseover", function (rainbowEvent ) {
        rainbowEvent.target.style.backgroundColor = randomColors();
    })
});

// when user clicks ERASER MODE button, changes the divs we hover over to WHITE (eraser)
let eraseBtn = document.getElementById("eraser");
eraseBtn.addEventListener('click', function () {
    gridContainer.addEventListener("mouseover", function( eraseEvent ) {
    eraseEvent.target.style.backgroundColor = "#ffffff";
})
});

// call createSquares function
createSquares();