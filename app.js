let width = 0
let height = 0
$(document).ready(() => {
    $(window).resize(() => {
        createGrid()
    })
    createGrid()
})

const createGrid = () => {
    const gridContainer = document.getElementById("grid-container")
    gridContainer.innerHTML = ''
    width = $(document).outerWidth()
    height = $(document).outerHeight()
    const columns = Math.ceil(width / 50) + 2
    const rows = Math.ceil(height / 50) + 1
    $(".grid-container").css("grid-template-columns",`repeat(${columns},50px)`)
    const cellTemplate = document.getElementById("grid-cell-temp")
    for (var y = 0; y < rows; y++){
        for (var x = 0; x < columns; x++){
            gridContainer.appendChild(cellTemplate.content.cloneNode(true))
        }
    }
}