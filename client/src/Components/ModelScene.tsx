// import * as THREE from 'three'
import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { CameraShake, OrbitControls } from '@react-three/drei'
// import { KernelSize } from 'postprocessing'
import { Model } from './model'
import { useLocation } from "react-router-dom";
// import { EffectComposer, Bloom } from '@react-three/postprocessing'

interface locationProps{
    state:{
        fileName:string
    }
}
function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[-Math.PI /2, 0, 0]} position={[0, -15, 10]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="black" />
    </mesh>
  );
}
function BackDrop() {
  return (
    <mesh receiveShadow rotation={[-Math.PI /1, 0, 0]} position={[0, -10, 30]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="black" />
    </mesh>
  );
}

const ModelScene = () => {
    const location = useLocation() as locationProps
    const id = location.state.fileName
  return (
    <div className='flex h-screen'>
    <div className=' w-full h-full m-auto bg-black'>
    <Canvas camera={{fov:70,near:1,position:[-10,10,-25]}}>
        <Suspense>
          <GroundPlane/>
          <BackDrop />
         
          <spotLight position={[30, 50, 20]} angle={2} penumbra={1} />
          <pointLight position={[-15, 1, -15]} intensity={2} />
          <pointLight position={[0, -15, 0]} intensity={1.5} />
        
          <Model modelName={id}/>
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          
        </Suspense>
      </Canvas>
    </div>
    </div>
    
  )
}

export default ModelScene