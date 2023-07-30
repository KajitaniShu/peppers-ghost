import React from 'react'
import { useGLTF, Shadow } from '@react-three/drei'

export function Tree({position, ...props}: any) {
  const model = useGLTF("object/tree_desert.gltf.glb"); 

  return (
    <>
    <mesh castShadow>
      <primitive 
        object={model.scene.clone()}
        position={position}
        {...props}
      />
    <Shadow opacity={1.3} position={[position[0], position[1]+0.01, position[2]]} />
  </mesh>
  </>
  )
}
