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

    canvas.width=img.naturalWidth;
    canvas.height=img.naturalHeight;

    ctx.drawImage(img, 0,0);
    URL.revokeObjectURL(url);
    const imageData=ctx.getImageData(0,0,canvas.width,canvas.height);
    const pixels = imageData.data;

// 2. Loop through pixels (4 array elements per pixel) and invert RGB
for (let i = 0; i < pixels.length; i += 4) {
  pixels[i]     = 255 - pixels[i];     // Red
  pixels[i + 1] = 255 - pixels[i + 1]; // Green
  pixels[i + 2] = 255 - pixels[i + 2]; // Blue
  // pixels[i + 3] is Alpha (left unchanged)
}

// 3. Draw the modified pixels back onto the canvas
ctx.putImageData(imageData, 0, 0);
console.log(imageData.data.length);
   };
})

 