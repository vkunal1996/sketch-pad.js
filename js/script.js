const board=document.querySelector(".sketchBoard");
let grid=document.createElement('div');
grid.setAttribute('class','grid');
let start=document.querySelector("#start");
let black=document.querySelector("#black");
let color=document.querySelector("#color");
let numberofGrid=16
let selected=null;
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

    black_position:if(selected==='black'){
        for (let i=0;i<att.length;i++){
            att[i].addEventListener('mouseover',function(e){
                e.target.style.backgroundColor='#000000'.toString();
            });
        }
    }
    else if (selected==='color'){
       for (let i=0;i<att.length;i++){
            att[i].addEventListener('mouseover',function(e){
                e.target.style.backgroundColor='#'+generateReandomColor().toString();
            });
        }
    }

    

    let clear=document.querySelector('#clear');
    clear.onclick=()=>{
        for(let i=0;i<att.length;i++){
            att[i].style.backgroundColor='white';
        }
    }
}
start.onclick=()=>{
    selected='black';
    while(board.firstChild){
        board.removeChild(board.firstChild);
    }
    numberofGrid=prompt("Enter the number of Grid");
    if(numberofGrid==null){
        return;
    }
    drawBoard(numberofGrid);
}
black.onclick=()=>{
    selected='black';
    while(board.firstChild){
        board.removeChild(board.firstChild);
    }
    numberofGrid=prompt("Enter the number of Grid");
    if(numberofGrid==null){
        return;
    }
    drawBoard(numberofGrid);
}

color.onclick=()=>{
   
    selected='color';
    while(board.firstChild){
        board.removeChild(board.firstChild);
    }
    numberofGrid=prompt("Enter the number of Grid");
    if(numberofGrid==null){
        return;
    }
    drawBoard(numberofGrid);
}

function generateReandomColor(){
    return Math.floor(Math.random()*16777215).toString(16);
}



