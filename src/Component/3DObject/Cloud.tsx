import React from 'react'
import { useGLTF, Shadow } from '@react-three/drei'

export function Cloud({position, ...props}: any) {
  const model = useGLTF("object/cloud.glb"); 

  return (
    <mesh castShadow>
      <primitive 
        object={model.scene.clone()}
        position={position}
        {...props}
      />
  </mesh>
  )
}
