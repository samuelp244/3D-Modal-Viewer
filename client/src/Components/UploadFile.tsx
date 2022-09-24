import axios from 'axios'
import React, { FormEvent, useState } from 'react'
// import { Event } from 'three'
import { useQueryClient } from '@tanstack/react-query'
import { BASE_URL } from '../api/Queries'

interface UploadFileProps{
    closeModel:()=>void
}
const UploadFile = (props:UploadFileProps) => {
    const [modelName,setModelName] = useState("")
    const [file,setFile] = useState<Blob>()
    const [FileError,setFileError] = useState(false) 

    const handlefilenamechange = (e: FormEvent)=>{
        e.preventDefault();
        const target = e.target as HTMLInputElement
        setModelName(target.value)
    }
    const onChange=(e: FormEvent): void =>{
        const target = e.target as HTMLInputElement
        if(target.files!==null) setFile(target.files[0])
        console.log(target.name)
    }
    const queryClient = useQueryClient()

    const onSubmit = async (e: FormEvent)=>{
        e.preventDefault();
        const formData = new FormData();
        if (file!==undefined &&modelName!==""){
            formData.append('file',file);
            formData.append('modelName',modelName);
            console.log(file)
            const res = await axios.post(`${BASE_URL}/upload`,formData,{
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                });
            if(res.status===200){
                props.closeModel()
                queryClient.invalidateQueries()
            }
        }else{
            setFileError(true)
        }
        
    } 

  return (
    <div  className='flex '>
        <div className=' p-3 w-full h-full m-auto  '>
            <p className='text-center text-4xl font-semibold'>Upload 3D Model</p>
            <div className='flex justify-center p-3 mt-3'>
                <form className='grid gap-5 p-3 w-full '>
                    <div className='flex justify-between'>
                        <label className='p-1'>Model Name</label>
                        <input 
                            type="text"
                            name="fileName"
                            className='text-black border border-black bg-slate-200 rounded px-3'
                            // defaultValue={fileName}
                            onChange={handlefilenamechange}
                            />
                    </div>
                    
                        <input 
                        type="file"
                        accept='.glb'
                        className='w-full'
                        onChange={onChange}
                        />
                        {FileError?<div className=" font-sans text-xs font-light text-red-600">Choose a file and Enter a model Name</div>:null}
                        <button
                        className='bg-[#00ADB5] p-1 hover:bg-[#65e9f0da] rounded text-black font-medium'
                        onClick={onSubmit}
                        >
                            submit
                        </button>
                        
                    
                    
                </form>
            </div>
            
        </div>
    </div>
    
  )
}

export default UploadFile