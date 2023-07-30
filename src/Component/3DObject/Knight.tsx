import React, { useEffect, useRef } from 'react'
import { useGLTF, Shadow } from '@react-three/drei'
import { useSpring, animated, config } from '@react-spring/three'


export function Knight({...props}: any) {
  const model : any = useGLTF("object/character1.glb");
  const [spring, api] = useSpring(() => ({ 'position-y': 0, config: { friction: 50, mass: 10, tension: 4000 } }), [])
  
  useEffect(() => {
    let timer: any;
    let isJump: boolean = false;
    const nod = () => {
      api.start({ 'position-y': isJump ? 1.8 : 0 });
      if(isJump) setTimeout(nod, 10);
      else      timer = setTimeout(nod, (1 + Math.random() * 10) * 1000);
      isJump = !isJump;
    }
    nod();
    return () => clearTimeout(timer)
  }, [])


  return (
    <group {...props}>
      <animated.group {...spring} >
        <mesh position={[0, 2.4, 0]}>
          <primitive object={model.nodes.head.clone()} />
        </mesh>
        <mesh>
          <primitive object={model.nodes.body.clone()} />
        </mesh>
      </animated.group>
      <Shadow opacity={1.5} scale={[1, 1, 1]} position={[0, -1.5, 0]}/>
      
    </group>
  )
}
