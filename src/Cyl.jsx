import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Cyl = () => {
  const tex = useTexture('./image.jpeg');
  const cyl = useRef(null);

  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });

  return (
    <group>
      <mesh ref={cyl} rotation={[0, 1.4, 0.5]}>
        <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Cyl;
