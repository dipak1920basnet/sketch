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
            continue
        }
    }

})