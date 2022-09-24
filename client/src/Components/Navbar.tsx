import React, { FormEvent, useState } from 'react'
// import { Link } from 'react-router-dom'
import {BsGithub} from "react-icons/bs"
import { Modal} from '@mantine/core';
import UploadFile from './UploadFile';
const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const HandleUploadButton = (e:FormEvent)=>{
    e.preventDefault();
    setOpened(true);
  }
  const HandleClose = ()=>{
    setOpened(false)
  }
  return (
    <div >
        <header className='flex justify-end p-1'>
            <div className='flex text-lg justify-between gap-4 mx-6 my-2 '>
            <a 
                className='flex gap-2 hover:underline' 
                href="https://github.com/samuelp244/3D-modal-viewer"
                >
                    <span className='my-auto'><BsGithub/></span>
                    <p>Source</p>
            </a>

            <a className="hover:underline" href="/#" onClick={HandleUploadButton}>Upload</a>
            </div>
        </header>
        <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="md"
        style={{outline:'none'}}
        >
          <UploadFile closeModel={HandleClose}/>
        </Modal>
    </div>
  )
}

export default Navbar