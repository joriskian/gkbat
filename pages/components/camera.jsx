import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import styles from './camera.module.css';

function Model(props) {
  const { nodes, materials } = useGLTF('/camera.glb');
  return (
    <group
      {...props}
      dispose={null}
      rotation={[1.2, 1, 0]}
      scale={[0.2, 0.2, 0.2]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base.geometry}
        material={materials.Material__6}
        position={[0.04, 0.21, 0.2]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camera.geometry}
        material={materials.Material__6}
        position={[-16.16, 4.25, -0.06]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.socle.geometry}
        material={materials.Material__6}
        position={[-16.16, 4.25, -0.06]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

function Camera() {
  return (
    <div className={styles.canvas}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Camera;
