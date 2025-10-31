function generateGrid (n, parent) {
    parent.innerHTML = ""
    const size = 600 / Math.sqrt(n)
    for (let i = 0; i < n; i++) {
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
let btn = document.querySelector(".buttons")

btn.addEventListener("click", (event) => {
    let target = event.target.id
    switch (target) {
        case "smallGrid":
            generateGrid(100, grid)
            return
        case "mediumGrid":
            generateGrid(400, grid)
            return
        case "bigGrid":
            generateGrid(900, grid)
            return
    }    
})