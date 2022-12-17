let mouseDown = 0;
let resetButton = document.getElementById('reset');

let blackButton = document.getElementById('black');
let blueButton = document.getElementById('blue');
let yellowButton = document.getElementById('yellow');

var globalColor = "black";



window.onmousedown = () => {
    ++mouseDown;
}
window.onmouseup = () => {
    --mouseDown;
}

function populateBoard(size){
    let board = document.querySelector(".board");
    let prevBoxes = board.querySelectorAll('div');
    //remove all elements for setting
    prevBoxes.forEach((element)=> element.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let amount = size * size;
    board

    //disables drag to prevent cursor from acting up
    board.ondragstart = () => {
        return false;
    }
    for(let i = 0; i < amount ; i++){

        let box = document.createElement("div");
        box.style.backgroundColor = "white";
        board.insertAdjacentElement('beforeend', box);
        //drag draw
        box.addEventListener('mouseover', colorSquareDrag);
        //click draw
        box.addEventListener('click', colorSquareNoDrag);
        
    }
}

// Modifies the size of the grid
function changeSize(input){
    if(input >= 2 && input <= 100){
        populateBoard(input);
    }
    else{
        console.log('too many squares');
    }
}


function resetBoard(){
    let board = document.querySelector(".board");
    let prevBoxes = board.querySelectorAll('div');    
    prevBoxes.forEach((element) => element.style.backgroundColor = "white");
}


function colorSquareDrag(){
    if(mouseDown || window.onclick){
        this.style.backgroundColor = globalColor;
    }
    
}
function colorSquareNoDrag(){
    this.style.backgroundColor = globalColor;
    
}

function changeColor(choice){
    globalColor = choice;
}

populateBoard(16);
console.log(globalColor);