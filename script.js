function generateDivs (n, parent) {
    for (let i = 0; i < n; i++) {
        let newDiv = document.createElement("div")
        parent.appendChild(newDiv)
    }
}

let inp = document.querySelector("#input_count")
let grid = document.querySelector("#grid")
let btn = document.querySelector("button")

btn.addEventListener("click", () => {
    generateDivs(inp.value, grid)
})