import React, {useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { Ground } from './3DObject/Ground'
import { Barrier } from './3DObject/Barrier'
import { Flag } from './3DObject/Flag'
import { Tree } from './3DObject/Tree'
import { Plant } from './3DObject/Plant'
import { Cloud } from './3DObject/Cloud'
import { Float, Preload, ContactShadows, Environment, SoftShadows, OrbitControls, PointerLockControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { Player } from './3DObject/Player'

export function ActionGame() {
  return (
    <>
    <Canvas
        style={{
          position: 'absolute',
          top: 0,
          zIndex:-1,
          width: '100vw',
          height: '100vh',
        }}
        camera={{ 
          position: [30, 4, 0],
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
        <OrbitControls/>
        <Preload all />
        <ContactShadows frames={1} opacity={0.6} scale={10} blur={0.2} far={10} width={5} height={5} color="#000000"/>
        <Environment preset="city" />
        <Physics gravity={[0, -9.8, 0]} colliders={false}>
          <Player/>
          <Ground position={[0, -5, -8]} />
          <Ground position={[0, -5, -6]} />
          <Ground position={[0, -5, -4]} />
          
          <Ground position={[0, -3, -2]} />
          <Ground position={[0, -5, -2]} />

          <Ground position={[0, -3, 2]} />
          <Ground position={[0, -5, 2]} />
          
          <Ground position={[0, -5, 4]} />
          <Ground position={[0, -5, 6]} />
          <Ground position={[0, -5, 8]} />
          
          <Barrier position={[0, -3, -8.5]} />
          <Flag position={[0, -3, 8]} rotation-y={-Math.PI/2}/>
        </Physics>
        <Tree position={[0, -3, 5.9]} scale={[0.8, 0.8, 0.8]} rotation-y={Math.PI/2}/>
        <Plant position={[-0.7, -3, -5.9]} scale={[1.2, 1.2, 1.2]} rotation-y={Math.PI/2}/>

        <Float
          rotationIntensity={0}
          speed={2}
          floatingRange={[0.3, -0.3]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Cloud position={[-6, 3, -5.9]} scale={[0.8, 0.8, 0.8]} rotation-y={Math.PI/2}/>
        </Float>

        <Float
          rotationIntensity={0}
          floatingRange={[0.6, -0.6]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Cloud position={[-12, 0, 5.9]} scale={[0.5, 0.5, 0.5]} rotation-y={Math.PI/2}/>
        </Float>

    </Canvas>
    </>
  )
}
