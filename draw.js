let draw=false;
let firstmousecoordinate=0;
let secondmousecoordinate=0;
let canvas=document.querySelector('.canvas');
let clear=document.querySelector('.clear');
let mousecoordinate=document.createElement('div');
let ctx=canvas.getContext('2d');
let canvaspoints=canvas.getBoundingClientRect();

document.querySelector('body').appendChild(mousecoordinate);

canvas.addEventListener('mousedown',(e)=>{
    firstmousecoordinate=(e.clientX - canvaspoints.x) * (canvas.width / canvaspoints.width);
    secondmousecoordinate=(e.clientY - canvaspoints.y) * (canvas.height / canvaspoints.height);
    mousecoordinate.innerText=`x:${firstmousecoordinate}, y:${secondmousecoordinate}`;
    draw=true;
 
})
canvas.addEventListener('mousemove',(e)=>{
    if(!draw){
        return;
    }
   
    mousecoordinate.innerText=`x:${firstmousecoordinate}, y:${secondmousecoordinate}`;
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
const img = new Image();
  img.src = "./newimage.png"; // Replace with your image path or URL

  // Draw the image only after it finishes loading
  img.onload = () => {
    ctx.drawImage(img, 0, 0); // Draws at (x: 0, y: 0)
  };