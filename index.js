document.addEventListener("DOMContentLoaded", ()=>
{
    // Getting the board size in range of 1 to 100
    let board_size
    while (true)
    {
        board_size = parseInt(prompt("Get board size between 1 to 100"))
        if (board_size > 0 && board_size <= 100)
        {
            break
        }
        else{
            window.alert("board size must be in range of 1 to 100")
        }
    }

    let sketch = document.querySelector(".sketch")
    for (let i = 0; i < (board_size*board_size); i++)
    { 
        let div = document.createElement('div')
        div.classList.add('one')
        // Adjusting the height and width of div as per the board
        div.style.width = `calc(100% / ${board_size})`
        div.style.height = `calc(100% / ${board_size})`
        sketch.appendChild(div)
    }
    // Checking if the mouse is cliked or not
    let isMouseDown = false;
    document.addEventListener('mousedown', () => {
        isMouseDown = true;
    });
    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    // changes color when mouse is clicked and hovered
    document.querySelectorAll('.one').forEach(oneDiv => {
        oneDiv.addEventListener('mouseenter', function () {
            if (isMouseDown) {
                this.style.backgroundColor = 'purple';
            }
        });
    });

    // Clears the board
    let clear_board = document.querySelector(".clear")
    clear_board.addEventListener("click",()=>
    {      
        document.querySelectorAll('.one').forEach(oneDiv => {
            oneDiv.style.backgroundColor = 'green';
            erase = false
        });
    })

    // Erases the drawing

    let erase_board = document.querySelector(".eraser")
    let erase = false;
    erase_board.addEventListener('click', () => {
        if (erase == false)
        {
            erase = true;
            erase_board.style.backgroundColor = 'blue';
        
                    
        }
        else
        {
            erase = false;
            erase_board.style.backgroundColor = 'white';
        }
        
    });
    document.querySelectorAll('.one').forEach(oneDiv => {
        oneDiv.addEventListener('mouseenter', function () {
            if (isMouseDown & erase) {
                this.style.backgroundColor = 'green';
            }
        });
    });
    
        
})
