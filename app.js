const container = document.querySelector('#container');
const clearGridBtn = document.querySelector('#clear-grid-btn')

function makeGrid(rows, cols) {

    let cell;
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        cell = document.createElement("div");
        cell.innerText = ("");
        container.appendChild(cell).className = "grid-item";
    };

    const containerItems = container.querySelectorAll('div');
    
    for (let i = 0; i < containerItems.length; i++) {
        containerItems[i].addEventListener('mouseenter', function() {
            containerItems[i].classList.add('grid-item-hover');
        });
    }

    clearGridBtn.addEventListener('click', function() {
        for (item of containerItems) {
            item.classList.remove('grid-item-hover');
        }
        
        popUp()
    });



};

function popUp() {

}



makeGrid (16, 16);


