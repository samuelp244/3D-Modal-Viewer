import express, { Express, Request, Response } from 'express';
import fileUpload from "express-fileupload"
import cors from "cors"
import mongoose from "mongoose";
import FilesDataModel from "./models/FilesDataModel"
import path from 'path';
const app = express();
app.use(cors())
app.use(fileUpload())
app.use(express.static('client'));
mongoose.connect('mongodb://localhost:27017/threeDModels')

app.post('/upload',(req:Request,res:Response)=>{
    if(req.files === null){
        return res.status(400).json({message:"upload failed"});
    }
    const file = req.files?.file as fileUpload.UploadedFile
    file.mv(`${__dirname}/client/uploads/${file.name}`,err=>{
        if(err){
            console.log(err)
            return res.status(500).send(err);
        }
    })
    try{
        FilesDataModel.create({
            ModelName:req.body.modelName,
            FileName:file.name
        })
    }catch(err){
        console.log(err)
    }
    res.send({fileName:file.name})
})

app.get('/getUploadsList',async(req:Request,res:Response)=>{

    try{
         const fileUploads = await FilesDataModel.find();
        res.send({files:fileUploads})
    }catch(err){
        console.log(err);
    }
    
})

app.get('/test',(req:Request,res:Response)=>{
    res.send("test success")
})
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/index.html'))
})
app.listen(3000,()=>{
    console.log("app listening at 3000")
})