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
        div.style.width = `calc(100% / ${board_size})`
        div.style.height = `calc(100% / ${board_size})`
        sketch.appendChild(div)
    }
    let isMouseDown = false;
    document.addEventListener('mousedown', () => {
        isMouseDown = true;
    });
    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });


    document.querySelectorAll('.one').forEach(oneDiv => {
        oneDiv.addEventListener('mouseenter', function () {
            if (isMouseDown) {
                this.style.backgroundColor = 'black';
            }
        });
    });
        
})
