function createDivs(amount) {
    //This function creates a grid of divs inside the container
    //the grid will have a size of (amount x amount)
    const container = document.querySelector('#container');
    for(let i = 0; i < (amount * amount); i++) {
        var div = document.createElement("div");
        div.classList.add("box");
        container.appendChild(div);
    }
}


createDivs(16);