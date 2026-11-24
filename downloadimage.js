const image=document.querySelector('#img');
debugger;
image.addEventListener('change',async(e)=>{
    debugger;

   const name=e.target.files[0].name;
   const file=e.target.files[0];
   
   
   const formData = new FormData();
   formData.append('File', file);

try{

   const response = await fetch('http://localhost:5000/copyimage',{
      method:'POST',
      body:formData
   })
     const data = await response.json();
    console.log('Response from server:', data);
  } catch(error) {
    console.error('Error:', error);
  }
})

