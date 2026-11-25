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
const image=document.querySelector('#img');
//event trigger when an image is chosen or changed
image.addEventListener('change',(e)=>{
    
    const name=e.target.files[0].name; //name of the uploaded file
    const file=e.target.files[0];  //array of file uploaded with their metadata
    const blob=new Blob([file]);
    const url=URL.createObjectURL(blob);
    const img = new Image();
    
    
    img.src = url; // Replace with your image path or URL
    // Draw the image only after it finishes loading
    
   img.onload = () => {
       const scale = Math.min(
        canvas.width / img.naturalWidth,
        canvas.height / img.naturalHeight
    );

  const drawWidth = img.naturalWidth * scale;
  const drawHeight = img.naturalHeight * scale;

  // Center the image on the canvas
  const offsetX = (canvas.width - drawWidth) / 2;
  const offsetY = (canvas.height - drawHeight) / 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
   };
})

 