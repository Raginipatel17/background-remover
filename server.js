const express = require('express');
const fs=require('fs');
const path=require('path');
const cors=require('cors');
// const imageDownload=require('./copyImageToFolder');
const multer=require('multer');
const app = express();
app.use(cors());

// Ensure the 'uploads' folder exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder where images will be saved
  },
  filename: (req, file, cb) => {
    // Give the file a unique name + original extension
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });
app.post('/copyimage', upload.single('File'),async (req, res) => {

  console.log(req.file); 
  
  
 
});
app.get('/',(req,res)=>{
  req.send("hello world");
})

const server = app.listen(5000, () => {
  console.log('Listening on 5000');
});

// Check what is causing the exit
process.on('exit', (code) => {
  console.log(`Process exited with code: ${code}`);
});
