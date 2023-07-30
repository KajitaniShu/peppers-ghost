import React from 'react'
import { useGLTF, Shadow } from '@react-three/drei'

export function Fish({position, ...props}: any) {
  const model = useGLTF("object/sakana.glb"); 

  return (
    <mesh>
      <primitive 
        object={model.scene.clone()}
        {...props}
        position={position}
      />
  </mesh>
  )
}
