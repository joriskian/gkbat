import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import styles from './camera.module.css';

const Model = (props) => {
  const { nodes, materials } = useGLTF('/camera.glb');
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Camera"
          position={[-0.47, -8.42, 237.33]}
          rotation={[1.53, 0.03, 0.03]}
          scale={7.21}
        >
          <group name="Camera_Orientation" />
        </group>
        <PerspectiveCamera
          makeDefault={true}
          far={1000}
          near={0.1}
          fov={500}
          rotation={[0, 0, 0]}
          position={[0, 0, 50]}
          castShadow
        />
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={nodes.Plane.material}
          position={[-53.74, -12.46, 69.56]}
          rotation={[0, -0.17, -Math.PI / 2]}
          scale={[82.41, 35.48, 123]}
        />
        <mesh
          name="base"
          geometry={nodes.base.geometry}
          material={materials.Material__6}
          position={[-41.27, 0.21, -2.01]}
          rotation={[Math.PI / 2, 0, -2.97]}
        />
        <mesh
          name="camera"
          geometry={nodes.camera.geometry}
          material={materials.Material__6}
          position={[-25.36, 4.25, 1.04]}
          rotation={[props.cameraRotation.base, 0, props.cameraRotation.cam]}
        />
        <mesh
          name="socle"
          geometry={nodes.socle.geometry}
          material={materials.Material__6}
          position={[-25.36, 4.25, 1.04]}
          rotation={[Math.PI / 2, 0, -2.97]}
        />
      </group>
    </group>
  );
};

function Camera2() {
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
export default Camera2;
