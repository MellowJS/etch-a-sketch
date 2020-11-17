const container = document.querySelector('#container');
const clearGridBtn = document.querySelector('#clear-grid-btn');

function makeGrid(rows = 16, cols = 16) {

    let cell;
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        cell = document.createElement("div");
        cell.innerText = ("");
        container.appendChild(cell).className = "grid-item";
    };


};
makeGrid()


let containerItems = container.querySelectorAll('.grid-item');

function paint() {
    for (let i = 0; i < containerItems.length; i++) {
        containerItems[i].addEventListener('mouseenter', function () {
            containerItems[i].classList.add('grid-item-hover');
        });
    }
}

function paintProperly() {
    for (let item of containerItems) {
        item.addEventListener('mouseenter', function() {
            item.classList.add('grid-item-hover');
        });
    }
}
paintProperly()


function clearGrid() {
    for (item of containerItems) {
        item.classList.remove('grid-item-hover');
    }
}


function remakeGrid() {
    container.innerHTML = '';
    const inputValue = parseInt(prompt("enter dimension (max dimension = 100)"));
    if (inputValue <= 100) {
        makeGrid(inputValue, inputValue);
    } else {
        document.write("ERROR")
    }
    containerItems = container.querySelectorAll('.grid-item');
    paintProperly();    
}

clearGridBtn.addEventListener('click', function() {
    remakeGrid();
});


