function generateGrid (n, parent) {
    parent.innerHTML = ""
    const size = 600 / n
    for (let i = 0; i < n*n; i++) {
            let r = 0
            let g = 0
            let b = 0
            if (isColor === true) {
                r = Math.floor(Math.random() * 256)
                g = Math.floor(Math.random() * 256)
                b = Math.floor(Math.random() * 256)
            }
            let newDiv = document.createElement("div")
            newDiv.style.height = size + "px"
            newDiv.style.width = size + "px"
            newDiv.addEventListener("mouseover", () => {
                newDiv.style.background = `rgb(${r}, ${g}, ${b})`;
            })
            parent.appendChild(newDiv)
    }
}

let grid = document.querySelector("#grid")
let btn_grid = document.querySelector("#generateGrid")
let btn_color = document.querySelector("#color")
let input = document.querySelector("input")
let isColor = false

document.addEventListener("click", (event) => {
    let target = event.target.id
    let gridSize = input.value
    if (gridSize < 0 || gridSize > 100) {
        alert('Please choose a value between 1 and 100')
    }
    switch (target) {
        case "generateGrid":
            generateGrid(gridSize, grid)
            break
        case "color":
            isColor = !isColor
            if (isColor === true) {
                btn_color.textContent = "I only want black"
            }
            else {
                btn_color.textContent = "Add some color"
            }
            generateGrid(gridSize, grid)
            break
    }   
})

window.onload = (event) => {
  const size = 30  
  input.value = size
  generateGrid(size, grid)
};