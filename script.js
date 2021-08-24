function createDivs(amount) {
    //This function creates a grid of divs inside the container
    //the grid will have a size of (amount x amount)
    if(amount > 100) {
        const alertText = document.querySelector('#alertText');
        alertText.textContent = "Dimension too large! Please use a value between 1-100"
        amount = 100;
    }
    else if(amount <= 0) {
        const alertText = document.querySelector('#alertText');
        alertText.textContent = "Do you even draw?";
        return;
    }
    else {
        const alertText = document.querySelector('#alertText');
        alertText.textContent = "";
    }
    const container = document.querySelector('#container');
    for(let i = 0; i < (amount * amount); i++) {
        var div = document.createElement("div");
        div.style.height = `${640/amount}px`; //calculate height and width for the square using the amount of squares
        div.style.width = `${640/amount}px`; //lol same I guess
        div.classList.add("box");
        container.appendChild(div);
    }
    const boxes = document.querySelectorAll('.box').forEach(item => {
        item.addEventListener('mouseenter', event => {
            item.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
        })
    });
    const dimensionText = document.querySelector('#currentDimension');
    dimensionText.textContent = `Current dimensions: ${amount} x ${amount}`;
}

function clearCanvas() {
    const boxes = document.querySelectorAll('.box').forEach(item => {
        item.remove();
    });
    let canvasSize = Math.floor(prompt("Give new dimension for the canvas (1-100)"));
    createDivs(canvasSize);
}

createDivs(16); //initialize the grid with 16x16

document.querySelector('#clearButton').addEventListener("click", function() {
    clearCanvas();
});

