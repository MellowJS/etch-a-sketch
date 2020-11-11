// use two for loops to make a grid

const container = document.querySelector('#container');

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = ("");
        container.appendChild(cell).className = "grid-item";
    };

};



makeRows(16, 16);