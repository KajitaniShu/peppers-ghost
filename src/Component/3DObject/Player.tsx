import { useRef, useMemo } from 'react'
import { Vector3 } from 'three'
import { useThree, useFrame } from '@react-three/fiber'
import { KeyboardControls, KeyboardControlsEntry, useKeyboardControls } from '@react-three/drei'
import { RigidBody, RapierRigidBody, CapsuleCollider, CuboidCollider} from '@react-three/rapier'
import { Knight } from './Knight'

const SPEED = 4
const direction = new Vector3()
const frontVector = new Vector3()
const sideVector = new Vector3()
const rotation = new Vector3()

export function Player() {
  const rigidBody = useRef<RapierRigidBody>(null!)
  
  let forward: number, backward: number, left: number, right: number, jump: number = 0.0;
  useFrame((state) => {
    forward = 0.0; backward = 0.0; left = 0.0; right = 0.0; jump = 0.0;
    const gamepads = navigator.getGamepads()[0];
    if(!gamepads) {
      return;
    }

    if (gamepads && gamepads?.buttons[15].pressed) right = 1.0;
    if (gamepads && gamepads?.buttons[14].pressed) left = 1.0;
    if (gamepads && gamepads?.buttons[0].pressed)  jump = 1.0;
    
    const velocity = rigidBody.current.linvel();

    const rigidPos = rigidBody.current.translation() as Vector3

    frontVector.set(0, 0, Number(backward) - Number(forward))
    sideVector.set(Number(left) - Number(right), 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(state.camera.rotation)

    rigidBody.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z }, true)
    
    if (rigidPos.y < 1 && rigidPos.y > -5 && jump) rigidBody.current.setLinvel({ x: 0, y: 4, z: 0 }, true)
    if(rigidPos.y < -10) rigidBody.current.setTranslation(new Vector3(0, 1, 7.5), true);
  })
  
  return (
    <>
      <RigidBody ref={rigidBody} position={[0, 1, 7.5]} lockRotations={true}>
        <CapsuleCollider args={[0.5, 0.5]}/>
        <Knight position={[0, -0.2, 0]} scale={[0.5, 0.5, 0.5]}/>
      </RigidBody>
      <CuboidCollider
      position={[0, -2, -8]}
      args={[0.5, 1, 0.5]}
      sensor
      onIntersectionEnter={() => {rigidBody.current.setTranslation(new Vector3(0, 1, 7.5), true)}}
    />
    <></>
    </>
  )
}
