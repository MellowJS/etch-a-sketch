const container = document.querySelector('#container');
const clearGridBtn = document.querySelector('#clear-grid-btn');
const dimensionsBtn = document.querySelector('#dimensions-btn')

let modal = document.querySelector('#modal');
// use clearGridBtn
const span = document.querySelector('.close');


const inputValue = document.querySelector('#dimensions').value;


function makeGrid(rows=16, cols=16) {

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
        
        modalPopUp()
    });

    function modalPopUp() {

        clearGridBtn.addEventListener('click', function() {
            modal.style.display = "block";
        });
    
        span.addEventListener('click', function() {
            modal.style.display = "none";
        });
    
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        })
    
        dimensionsBtn.addEventListener('click', function() {
            makeGrid(inputValue, inputValue);
        });
    
    }

};

makeGrid()

