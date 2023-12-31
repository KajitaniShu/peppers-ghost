import React from 'react'
import { useGLTF, Shadow } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function Barrier({position, ...props}: any) {
  const model = useGLTF("object/barrierSmall.gltf.glb"); 

  return (
    <RigidBody colliders="cuboid"  type='fixed'>
      <mesh>
        <primitive 
          object={model.scene.clone()}
          {...props}
          position={position}
        />
        <Shadow scale={[1.3, 0.4, 0.3]} opacity={1} position={[position[0], position[1]+0.01, position[2]]} />
        <Shadow scale={[1.3, 0.4, 0.3]} opacity={1} position={[position[0], position[1]+0.01, position[2]]} />
      </mesh>
    </RigidBody>
  )
}
