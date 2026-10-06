import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

// 3D Procedural Potted Plant mesh
const PlantMesh: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.2, 0]}>
      {/* Terracotta Pot */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.9, 0.65, 1.2, 24]} />
        <meshStandardMaterial color="#D86A38" roughness={0.6} />
      </mesh>
      {/* Pot Rim */}
      <mesh position={[0, 1.0, 0]}>
        <cylinderGeometry args={[0.98, 0.94, 0.18, 24]} />
        <meshStandardMaterial color="#C35626" roughness={0.5} />
      </mesh>
      {/* Soil Top */}
      <mesh position={[0, 0.98, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.88, 24]} />
        <meshStandardMaterial color="#22150E" roughness={0.9} />
      </mesh>

      {/* Main Trunk Stem */}
      <mesh position={[0, 1.6, 0]}>
        <cylinderGeometry args={[0.12, 0.18, 1.2, 12]} />
        <meshStandardMaterial color="#4A3525" roughness={0.8} />
      </mesh>

      {/* Lush Leaf Clusters */}
      {[
        { pos: [0, 2.3, 0], rot: [0, 0, 0], scale: 1.1 },
        { pos: [0.35, 2.1, 0.2], rot: [0.3, 0.4, 0.2], scale: 0.9 },
        { pos: [-0.4, 2.0, -0.3], rot: [-0.2, -0.5, -0.3], scale: 0.85 },
        { pos: [0.2, 2.6, -0.2], rot: [0.1, 1.2, 0.1], scale: 0.75 },
        { pos: [-0.25, 2.4, 0.3], rot: [-0.3, 0.8, -0.2], scale: 0.8 },
      ].map((leaf, i) => (
        <group key={i} position={leaf.pos as [number, number, number]} rotation={leaf.rot as [number, number, number]} scale={leaf.scale}>
          <mesh>
            <sphereGeometry args={[0.55, 12, 12]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#2D5A3F" : "#3A694C"}
              roughness={0.4}
            />
          </mesh>
        </group>
      ))}

      {/* Small Flowers/Fruit highlights */}
      {[
        [0.4, 2.3, 0.3],
        [-0.45, 2.2, 0.1],
        [0.1, 2.8, 0.2],
      ].map((pos, i) => (
        <mesh key={`fruit-${i}`} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshStandardMaterial color="#E5A93C" roughness={0.3} metalness={0.2} />
        </mesh>
      ))}
    </group>
  );
};

export const ThreePlantCanvas: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 1.5, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#FFF8E7" castShadow />
        <pointLight position={[-4, 2, -2]} intensity={0.5} color="#8FA89B" />

        <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.5}>
          <PlantMesh />
        </Float>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} maxPolarAngle={Math.PI / 2 + 0.1} />
      </Canvas>
    </div>
  );
};
