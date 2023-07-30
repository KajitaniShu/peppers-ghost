import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Icosahedron, Preload, MeshTransmissionMaterial, Environment, SoftShadows, RoundedBox, OrbitControls } from '@react-three/drei'
import { Beetle } from './3DObject/Beetle'


export function Insect() {
  return (
    <Canvas
        style={{
          position: 'absolute',
          top: 0,
          width: '100vw',
          height: '100vh',
        }}
        camera={{ 
          position: [30, 0, 0],
          fov: 45,
        }}
      >
        <ambientLight intensity={1}/>
        <directionalLight
          position={[50,50,50]}
          intensity={1}
        />
        <directionalLight
          position={[0, 10, 10]}
          intensity={1}
        />
        <SoftShadows />
        <Preload all />
        <Environment preset="city" />
        <OrbitControls autoRotate/>
        <Beetle scale={[8, 8, 8]}/>
    </Canvas>
  )
}
