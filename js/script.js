const board=document.querySelector(".sketchBoard");
let grid=document.createElement('div');
grid.setAttribute('class','grid');
let start=document.querySelector("#start");
let numberofGrid=16
start.onclick=()=>{
    while(board.firstChild){
        board.removeChild(board.firstChild);
    }
    numberofGrid=prompt("Enter the number of Grid");
    if(numberofGrid==null){
        return;
    }
    drawBoard(numberofGrid);
}

function drawBoard(number){
    board.style.height='auto';  
    let width=960/number;
    let height=width;
    for(let row=0;row<number;row++){
        for(let col=0;col<number;col++){
            let grid=document.createElement('div');
            grid.setAttribute('class','grid');
            grid.setAttribute('style','background-color:white;width:'+width+'px;height:'+height+'px;outline:1px solid black;margin-left:0px;margin-top:0px');
            board.appendChild(grid);
        }
    }
    let att=document.querySelectorAll('.grid');

    for (let i=0;i<att.length;i++){
        att[i].addEventListener('mouseover',function(e){
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.backgroundColor='#'+randomColor.toString();
        });
    }

    let clear=document.querySelector('#clear');
    clear.onclick=()=>{
        for(let i=0;i<att.length;i++){
            att[i].style.backgroundColor='white';
        }
    }
}

