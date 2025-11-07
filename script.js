function generateGrid (n, parent) {
    parent.innerHTML = ""
    const size = 600 / n
    for (let i = 0; i < n*n; i++) {
        let newDiv = document.createElement("div")
        newDiv.style.height = size + "px"
        newDiv.style.width = size + "px"
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.background = 'black'
        })
        parent.appendChild(newDiv)
    }
}

let grid = document.querySelector("#grid")
let btn = document.querySelector("button")
let input = document.querySelector("input")

btn.addEventListener("click", (event) => {
    let gridSize = input.value
    if (gridSize > 0 && gridSize <= 100) {
        generateGrid(gridSize, grid)
    }
    else {
        alert('Please choose a value between 1 and 100')
    }
    
})

window.onload = (event) => {
  const size = 30  
  input.value = size
  generateGrid(size, grid)
};