import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Icosahedron, Preload, MeshTransmissionMaterial, Environment, SoftShadows, RoundedBox, OrbitControls } from '@react-three/drei'
import { Fish } from './3DObject/Fish'


export function Aquarium() {
  return (
    <Canvas
        style={{
          position: 'absolute',
          top: 0,
          width: '100vw',
          height: '100vh',
        }}
        camera={{ 
          position: [30, 10, 0],
          fov: 45,
        }}
      >
        <ambientLight intensity={0.4}/>
        <directionalLight
          position={[50,50,50]}
          intensity={0.7}
        />
        <directionalLight
          position={[0, 10, 10]}
          intensity={0.2}
        />
        <SoftShadows />
        <Preload all />
        <Environment preset="city" />
        <OrbitControls autoRotate/>
        <group>
          <RoundedBox scale={[15, 15, 15]}>
            <MeshTransmissionMaterial
              backside
              samples={6}
              thickness={3}
              chromaticAberration={0.002}
              anisotropy={0}
              distortion={0.1}
              distortionScale={0.1}
              temporalDistortion={0.2}
              iridescence={1}
              iridescenceIOR={1}
              iridescenceThicknessRange={[0, 500]}
            />
          </RoundedBox>
          <Fish scale={[0.8, 0.8, 0.8]}/>
        </group>
    </Canvas>
  )
}
