//this project is to practice DOM manipulation
let containerDiv = document.getElementById('container');
let drawButton = document.querySelector('#draw-button');
let eraseButton = document.querySelector('#erase-button');
let clearGridButton = document.querySelector('#clear-grid-button');
let randomColorsButton = document.querySelector('#random-colors-button');
let widthBoxesSlider = document.querySelector('#row-boxes-slider');
let heightBoxesSlider = document.querySelector('#column-boxes-slider');

let numSquaresWidth = 16, numSquaresHeight = 16;
const heightContainer = 100, widthContainer = 100;

//create divs that display the value of the row and column
const rowSquaresValue = document.createElement('div');
const heightSquaresValue = document.createElement('div');
rowSquaresValue.innerText = numSquaresWidth;
rowSquaresValue.style.cssText = "font-size: 16px; display: inline-block;"
heightSquaresValue.innerText = numSquaresHeight;
heightSquaresValue.style.cssText = "font-size: 16px; display: inline-block;"
document.getElementById('widthDiv').appendChild(rowSquaresValue);
document.getElementById('heightDiv').appendChild(heightSquaresValue);

createGrid(numSquaresWidth,numSquaresHeight);

clearGridButton.addEventListener('click', ()=> {
    deleteGrid();
    createGrid(numSquaresWidth,numSquaresHeight);
});

drawButton.addEventListener('click', () => {changeToDraw()});
eraseButton.addEventListener('click', () => {changeToErase()});
randomColorsButton.addEventListener('click', () => {randomBoxColors()});

widthBoxesSlider.addEventListener('click', () => {
    deleteGrid();
    numSquaresWidth = widthBoxesSlider.value;
    rowSquaresValue.innerText = numSquaresWidth;
    document.getElementById('widthDiv').appendChild(rowSquaresValue);
    createGrid(numSquaresWidth, numSquaresHeight);
});

heightBoxesSlider.addEventListener('click', () => {
    deleteGrid();
    numSquaresHeight = heightBoxesSlider.value;
    heightSquaresValue.innerText = numSquaresHeight;
    document.getElementById('heightDiv').appendChild(heightSquaresValue);
    createGrid(numSquaresWidth, numSquaresHeight);
});


function createGrid(widthSquares, heightSquares)
{
    let heightBoxPercent = heightContainer/heightSquares;
    let widthBoxPercent = widthContainer/widthSquares;
    for(let i = 0; i < widthSquares; i++)
    {
        for(let j = 0; j < heightSquares; j++)
        {
            createNewDiv(widthBoxPercent, heightBoxPercent);
        }
    }
}

//delete all the boxes in the container
function deleteGrid()
{
    let containerDiv = document.getElementById('container');
    while(containerDiv.firstChild)
    {
        containerDiv.removeChild(containerDiv.firstChild);
    }
}

function clearGrid()
{
    let allBoxes = document.querySelectorAll('.boxes');
    for(let i = 0; i < allBoxes.length; i++)
    {
        allBoxes[i].style.backgroundColor = "white";
    }    
}


function createNewDiv(widthBoxPercent,heightBoxPercent)
{
    const newDiv = document.createElement('div');
    newDiv.classList.add('boxes');
    newDiv.style.cssText = 'height:'+heightBoxPercent+'% !important;'+'width:'+widthBoxPercent+'% !important;'
    newDiv.addEventListener('mouseenter', () => {newDiv.style.backgroundColor = "lightblue"});
    containerDiv.appendChild(newDiv);
}

//draw button functionality
function changeToDraw() {
    let allBoxes = document.querySelectorAll('.boxes');
    for(let i = 0; i < allBoxes.length; i++)
    {
        allBoxes[i].addEventListener('mouseenter', () => 
            {allBoxes[i].style.backgroundColor = "lightblue"});
    }
}

function changeToErase(){
    let allBoxes = document.querySelectorAll('.boxes');
    for(let i = 0; i < allBoxes.length; i++)
    {
        allBoxes[i].addEventListener('mouseenter', () => {
            allBoxes[i].style.backgroundColor = "white"});
    }
}    



function randomBoxColors()
{
    let allBoxes = document.querySelectorAll('.boxes');
    for(let i = 0; i < allBoxes.length; i++)
    {
        allBoxes[i].addEventListener('mouseenter', () => 
        {
            const redColor = Math.floor(Math.random() * (256));
            const blueColor = Math.floor(Math.random() * (256));
            const greenColor = Math.floor(Math.random() * (256));
            allBoxes[i].style.backgroundColor = "rgb(" + redColor +"," + blueColor +"," + greenColor +")";
        })
    }
}

