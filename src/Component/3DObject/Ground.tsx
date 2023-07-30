import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'


export function Ground({...props}: any) {
  const model = useGLTF("object/tileHigh_forest.gltf.glb"); 

  return (
    <RigidBody colliders="cuboid"  type='fixed'>
    <mesh castShadow>
      <primitive 
        object={model.scene.clone()}
        {...props}
      />
  </mesh>
  </RigidBody>
  )
}
