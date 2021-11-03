//this project is to practice DOM manipulation
let widthSquares = 16, heightSquares = 16;
let containerDiv = document.getElementById('container');


for(let i = 0; i < widthSquares; i++)
{
    for(let j = 0; j < heightSquares; j++)
    {
        createNewDiv();
    }
}


function createNewDiv()
{
    const newDiv = document.createElement('div');
    newDiv.classList.add('boxes');
    containerDiv.appendChild(newDiv);
}