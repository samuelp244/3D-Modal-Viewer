// import * as THREE from 'three'
import React from 'react'
import { useState, useEffect } from 'react'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import * as THREE from 'three'
// import { useFrame } from '@react-three/fiber'

interface CustomModelProps{
    modelName:string
}

export const Model = (props:CustomModelProps)=>{
    const [model, setModel] = useState<GLTF>();
    useEffect(() => {
      new GLTFLoader().load(`./uploads/${props.modelName}`, (model) => {
        model.scene.scale.set(10, 10, 10);
        model.scene.rotateY(3)
        model.scene.castShadow = true
        // model.scene.rotateZ(0.1)
        setModel(model);
      });
    },[props]);

    return model ? <primitive object={model.scene} /> : null;
  }