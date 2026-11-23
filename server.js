const express = require('express');
const cors=require('cors');
const imageDownload=require('./copyImageToFolder');
const app = express();
app.use(cors());

app.post('/copyimage',async(req,res)=>{
  const {filename,url}=res.body;
  try{
    await imageDownload.downloadFile(filename,url);
    res.json({ 
      success: true, 
      message: 'Image fetched and saved!', 
      path: savedLocation 
    });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
})

app.get('/',(res,req)=>{
  req.send("hello world");
})

const server = app.listen(5000, () => {
  console.log('Listening on 5000');
});

// Check what is causing the exit
process.on('exit', (code) => {
  console.log(`Process exited with code: ${code}`);
});
