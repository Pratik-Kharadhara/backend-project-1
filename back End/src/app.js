const express = require('express');
const multer = require('multer')
//from storage.service
const uploadFile = require("./services/storage.services");
const postModel= require('./models/post.model');




const app = express();
app.use(express.json()); //as we are uploading file this time so this json won't help 
//we will us multer middleware
const upload = multer({
    storage : multer.memoryStorage()
})

//creating api to post the image and the caption
app.post('/post-create',upload.single("image") , async(req,res)=>{ //bcz we are using multer middleware thats why we need to upload.single and specify image as our input 
   //using form-data in postman body section
    console.log(req.body); //this will only give us the caption as its a text
    //console.log(req.file); //.file will give the name and the buffer(data chunk) for the file we uploaded 
    //now we will take the buffer and use it in the imageKit cloud service provider where we will upload that and a get a string for the image
    const result = await uploadFile(req.file.buffer)
    console.log(result);

    //we are going to post the image 
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

   return  res.status(201).json({
        mesage: "post created succesfully",
        post : post
    })
})

app.get('/post', async (req, res)=>{
            const posts = await postModel.find();

            res.status(200).json({
                message : "post retrieved succesfully", 
                posts: posts
            })

})


module.exports= app ;