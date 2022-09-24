// import * as THREE from 'three'
import React from 'react'
import { useState, useEffect } from 'react'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

interface CustomModelProps{
    modelName:string
}

export const Model = (props:CustomModelProps)=>{
    const [model, setModel] = useState<GLTF>();
  
    useEffect(() => {
      new GLTFLoader().load(`./uploads/${props.modelName}`, (model) => {
        model.scene.scale.set(30, 30, 30);
        setModel(model);
      });
    },[props]);
    return model ? <primitive object={model.scene} /> : null;
  }