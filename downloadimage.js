const image=document.querySelector('#img');
//event trigger when an image is chosen or changed
image.addEventListener('change',async(e)=>{
  
   const name=e.target.files[0].name; //name of the uploaded file
   const file=e.target.files[0];  //array of file uploaded with their metadata
   
   
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

