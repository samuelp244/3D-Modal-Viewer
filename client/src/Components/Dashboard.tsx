import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import {MdArrowForwardIos} from "react-icons/md"
import { useFilesList } from '../api/Queries'

const Dashboard = () => {
    const {data} = useFilesList();
    
  return (
    <div className='flex h-screen'>
    <div className=' w-full h-full m-auto bg-[#202023] text-[#EEEEEE] '> 
        <Navbar/>
        <main className=' w-full  lg:max-w-[70%] md:max-w-[85%] max-w-[95%]  mx-auto p-4 mt-10 '>
            <ul className='w-full grid grid-col-1 bg-[#282b31] p-4 gap-3 rounded'>
            {
                data?.map(i=>(
                    <Link 
                        key={i._id}
                        to="/scene" 
                        className='flex justify-between rounded py-2 px-4 w-full bg-[#393E46] hover:bg-[#3f434b]'
                        state={{fileName:i.FileName}}
                        >
                        <p>{i.ModelName}</p>
                        <span className="my-auto"><MdArrowForwardIos/></span>
                    </Link>
                ))
            }
            </ul>
        </main>
        
    </div>
    </div>
  )
}

export default Dashboard