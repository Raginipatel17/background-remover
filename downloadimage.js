const image=document.querySelector('#img');
debugger;
image.addEventListener('change',async(e)=>{
    debugger;

   const name=e.target.files[0].name;
   const file=e.target.files[0];
   const blob=new Blob([file]);
   const url=URL.createObjectURL(blob);
   //create the downloadable anchor element
   // let anchorelement=document.createElement('a');
   // anchorelement.setAttribute('href',url);
   // anchorelement.setAttribute('download',name);
   // document.querySelector('body').appendChild(anchorelement);
   // anchorelement.click();
   // document.querySelector('body').removeChild(anchorelement);
   // debugger;
try{

   await fetch('http://localhost:5000/copyimage',{
      method:'POST',
      headers:{
         'Content-Type':'application/json'
      },
      body:JSON.stringify({
         filename:name,
         url:url
      })
   })
     const data = await response.json();
    console.log('Response from server:', data);
  } catch(error) {
    console.error('Error:', error);
  }
})

