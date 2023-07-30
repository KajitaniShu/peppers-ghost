import React from 'react'
import { useGLTF, Shadow } from '@react-three/drei'

export function Beetle({...props}: any) {
  const model = useGLTF("object/butterfly.glb"); 

  return (
    <mesh>
      <primitive 
        object={model.scene.clone()}
        {...props}
      />
  </mesh>
  )
}
