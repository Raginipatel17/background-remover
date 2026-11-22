import { downloadFile } from "./copyImageToFolder";
const image=document.querySelector('#img');
debugger;
image.addEventListener('change',(e)=>{
    debugger;

   const name=e.target.files[0].name;
   const file=e.target.files[0];
   const blob=new Blob([file]);
   const url=URL.createObjectURL(blob);
   //create the downloadable anchor element
   let anchorelement=document.createElement('a');
   anchorelement.setAttribute('href',url);
   anchorelement.setAttribute('download',name);
   document.querySelector('body').appendChild(anchorelement);
   anchorelement.click();
   document.querySelector('body').removeChild(anchorelement);
debugger;

   fetch('./copyImageToFolder.js',()=>{
    downloadFile(url,file);
   })
})

