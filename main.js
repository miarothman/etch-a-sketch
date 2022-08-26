// THIS IS MY JS FILE WHERE I WILL BE WRITING MY JAVASCRIPT CODE

// refers to our container div in our index.html file
let container = document.getElementById("container");

// createSquare function creates 16x16 divs which is 256 lines of divs
function createSquares() {
for (let i = 0; i < 256; i++) {
// create squares & adds them to the html grid container
let square = document.createElement("div");
// set style attributes to square divs
square.setAttribute('style', 'background-color: ivory; border: 1px solid black; width: 40px; height: 40px;')
//square.innerText = "Text";
container.appendChild(square);
}
}

// js event listener for hover effect example:
// element.addEventListener("mouseover", myFunction);
//element.addEventListener("mouseout", myThirdFunction);

let gridContainer = document.getElementById("container");
gridContainer.addEventListener("mouseover", function( event ) {
    event.target.style.backgroundColor = "gray";
})


// call createSquares function
createSquares();
