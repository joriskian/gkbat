import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import styles from './Camera.module.css';

const Model = (props) => {
  const { nodes, materials } = useGLTF('/camera.gltf');
  return (
    <group
      {...props}
      dispose={null}
      position={[-160, 10, -200]}
      rotation={[0, 0.75, 0]}
    >
      <PerspectiveCamera
        makeDefault={true}
        position={[50, 0, 200]}
        castShadow
      />
      <group
        position={[24.96, -10.09, 226.86]}
        rotation={[1.53, 0, 0]}
        scale={0}
      >
        {/* <PerspectiveCamera
          makeDefault={true}
          far={100}
          near={0.1}
          fov={250}
          position={[-1, 0, 1]}
          castShadow
        /> */}
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[-53.74, -12.46, 69.56]}
        rotation={[0, -0.17, -Math.PI / 2]}
        scale={[82.41, 35.48, 123]}
        material-color={'lightblue'}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base.geometry}
        material={materials.Material__6}
        position={[-41.27, 0.21, 0]}
        rotation={[Math.PI / 2, 0, -2.97]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camera.geometry}
        material={materials.Material__6}
        position={[-25.36, 4.25, 1.04]}
        rotation={[props.cameraRotation.base, 0, props.cameraRotation.cam]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.socle.geometry}
        material={materials.Material__6}
        position={[-25.36, 4.25, 1.04]}
        rotation={[Math.PI / 2, 0, -2.97]}
      />
    </group>
  );
};

function Camera() {
  const [mousePos, setMousePos] = useState({});
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.canvas}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight position={[10, 50, 80]} />
          <spotLight
            position={[10, 80, 100]}
            angle={Math.PI / 2}
            intensity={0.9}
            penumbra={0.8}
          />
          {`/** calculer les rotations pour un effet plus realiste */`}
          <Model
            cameraRotation={{
              cam: -mousePos.x / 1400 + 10,
              base: mousePos.y / 1400 + -5,
            }}
          />
          {`/** no orbitControls(interactivity) when z-index is behind another element */`}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Camera;
