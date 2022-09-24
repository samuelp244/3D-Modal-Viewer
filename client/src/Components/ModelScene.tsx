// import * as THREE from 'three'
import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Model } from './model'
import { useLocation } from "react-router-dom";

interface locationProps{
    state:{
        fileName:string
    }
}
const ModelScene = () => {
    const location = useLocation() as locationProps
    const id = location.state.fileName
  return (
    <div className='flex h-screen'>
    <div className=' w-full h-full m-auto bg-[#202023]'>
    <Canvas camera={{fov:70, zoom:1.3,near:1,position:[0,0,15]}}>
        <Suspense>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Model modelName={id}/>
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Suspense>
      </Canvas>
    </div>
    </div>
    
  )
}

export default ModelScene