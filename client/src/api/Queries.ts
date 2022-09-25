import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


export const BASE_URL = ""
// "http://localhost:1337"

interface FilesListProps{
    FileName:string,
    ModelName:string,
    _id:string
}

const fetchFilesList = async() =>{
    const data:FilesListProps[] = await axios.get(`${BASE_URL}/getUploadsList`).then(res=>{
        console.log(res.data)
        return res.data.files
    })
    return data
}
export const useFilesList = ()=> useQuery(['filesList'],fetchFilesList)
