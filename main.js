// THIS IS MY JS FILE WHERE I WILL BE WRITING MY JAVASCRIPT CODE

// refers to our container div in our index.html file
let container = document.getElementById("container");

// createSquare function creates 16x16 divs which is 256 lines of divs
function createSquares() {
for (let i = 0; i < 256; i++) {
// create squares & adds them to the html grid container
let square = document.createElement("div");
// set style attributes to square divs
square.setAttribute('style', 'background-color: ivory; color: ivory; border: 1px solid black;')
square.innerText = "Text";
container.appendChild(square);
}
}

// call createSquares function
createSquares();
