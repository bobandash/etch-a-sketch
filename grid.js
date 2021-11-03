//this project is to practice DOM manipulation
let containerDiv = document.getElementById('container');
let clearGridButton = document.querySelector('button');
createGrid(16,16);

clearGridButton.addEventListener('click', ()=> {clearGrid()});

function createGrid(widthSquares, heightSquares)
{
    let heightBoxPercent = 92.5/heightSquares;
    let widthBoxPercent = 100/widthSquares;
    for(let i = 0; i < widthSquares; i++)
    {
        for(let j = 0; j < heightSquares; j++)
        {
            createNewDiv(widthBoxPercent, heightBoxPercent);
        }
    }
}

function createNewDiv(widthBoxPercent,heightBoxPercent)
{
    const newDiv = document.createElement('div');
    newDiv.classList.add('boxes');
    newDiv.style.cssText = 'height:'+heightBoxPercent+'% !important;'+'width:'+widthBoxPercent+'% !important;'
    newDiv.addEventListener('mouseenter', () => {newDiv.classList.add('change-color')});
    containerDiv.appendChild(newDiv);
}

function clearGrid()
{
    let newWidthSquares = prompt("Plz gib me new num of squares 4 width. Don't exceed 100 please.");
    while(newWidthSquares > 100)
    {
        newWidthSquares = prompt("Please enter a valid input...");
    }
    let newHeightSquares = prompt("Plz gib me new num of squares 4 height. Don't exceed 100 please.");
    while(newHeightSquares > 100)
    {
        newHeightSquares = prompt("Please enter a valid input...");
    }
    let allBoxes = document.querySelectorAll('.boxes');
    
    for(let i =0; i < allBoxes.length; i++)
    {
        containerDiv.removeChild(containerDiv.lastChild);
    }

    createGrid(newWidthSquares, newHeightSquares);

}


