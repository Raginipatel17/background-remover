let draw=false;
let firstmousecoordinate=0;
let secondmousecoordinate=0;
let canvas=document.querySelector('.canvas');
let clear=document.querySelector('.clear');
let mousecoordinate=document.createElement('div');
let ctx=canvas.getContext('2d');

document.querySelector('body').appendChild(mousecoordinate);

canvas.addEventListener('mousedown',(e)=>{
    let canvaspoints=canvas.getBoundingClientRect();
    
    firstmousecoordinate=(e.clientX - canvaspoints.x) * (canvas.width / canvaspoints.width);
    secondmousecoordinate=(e.clientY - canvaspoints.y) * (canvas.height / canvaspoints.height);
    mousecoordinate.innerText=`x:${e.clientX-canvaspoints.x}, y:${e.clientY-canvaspoints.y}`;
    draw=true;
 
    debugger;
})
canvas.addEventListener('mousemove',(e)=>{
    if(!draw){
        return;
    }
    canvaspoints = canvas.getBoundingClientRect();
    mousecoordinate.innerText=`x:${e.clientX-canvaspoints.x}, y:${e.clientY-canvaspoints.y}`;
    debugger;
    ctx.beginPath();
    ctx.moveTo(firstmousecoordinate, secondmousecoordinate);
    console.log('firstmove1:',firstmousecoordinate,'secondmove1',secondmousecoordinate);
    ctx.lineTo((e.clientX - canvaspoints.x) * (canvas.width / canvaspoints.width) , (e.clientY - canvaspoints.y) * (canvas.height / canvaspoints.height));
    ctx.strokeStyle = "black";  
    ctx.lineWidth = 1; 
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
    firstmousecoordinate=(e.clientX - canvaspoints.x) * (canvas.width / canvaspoints.width);
    secondmousecoordinate=(e.clientY - canvaspoints.y) * (canvas.height / canvaspoints.height);
    debugger;
    console.log("Canvas actual width:", canvas.width);
console.log("Canvas actual height:", canvas.height);

console.log("Canvas displayed width:", canvas.getBoundingClientRect().width);
console.log("Canvas displayed height:", canvas.getBoundingClientRect().height);
})

canvas.addEventListener('mouseup',(e)=>{
    draw=false;
})
clear.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
})