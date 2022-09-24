import mongoose from "mongoose";

const FilesDataModel = new mongoose.Schema(
    {
        ModelName:{type:String},
        FileName:{type:String}
    },
    {
        collection:'FilesData'
    }
)
const model = mongoose.model('FilesDataModel',FilesDataModel);

export default model;