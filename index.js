document.addEventListener("DOMContentLoaded", ()=>
{
    // Getting the board size in range of 1 to 100
    while (true)
    {
        let board_size = parseInt(prompt("Get board size between 1 to 100"))
        if (board_size > 0 && board_size <= 100)
        {
            break
        }
        else{
            window.alert("board size must be in range of 1 to 100")
        }
    }

    let board = document.querySelector(".sketch")
    board.innerHTML = ''
    for (let i = 0; i < board_size; i++)
    {
        let row = document.createElement('div')

        for (let j = 0; j< board_size; j++)
        {
            let column = document.createElement('div')
            column.style.borderColor = 'black'
            column.style.borderStyle = 'solid'
            column.style.borderWidth = '1px'
            column.style.backgroundColor = 'green'
            row.appendChild(column)
        }
        
        board.appendChild(row)
    }

})
