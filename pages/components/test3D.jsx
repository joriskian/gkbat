import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import styles from './test3D.module.css';

const Model = (props) => {
  const { nodes, materials } = useGLTF('/test.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
        position={[2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone.geometry}
        material={nodes.Cone.material}
        position={[0, 2, 0]}
      />
    </group>
  );
};

function Test3D() {
  return (
    <div className={styles.canvas}>
      <Canvas>
        <Suspense>
          <ambientLight position={[10, 50, 80]} />
          <spotLight
            position={[10, 80, 100]}
            angle={Math.PI / 2}
            intensity={0.9}
            penumbra={0.8}
          />
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Test3D;
