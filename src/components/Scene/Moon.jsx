import React, { useRef } from "react";
import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useAppContext } from "@/context/appContext";
export default function Moon() {
  const { nodes } = useGLTF("medias/moon.glb");
  const moonRef = useRef();
  const { size, viewport } = useThree();
  const { mousePosition } = useAppContext();

  const currentPosition = useRef({ x: 0, y: 0 });
  useFrame(() => {
    const factor = -0.005;
    const lerpFactor = 0.02;

    currentPosition.current.x +=
      mousePosition.x * factor - currentPosition.current.x * lerpFactor;
    currentPosition.current.y +=
      mousePosition.y * factor - currentPosition.current.y * lerpFactor;

    moonRef.current.position.x = currentPosition.current.x;
    moonRef.current.position.y = currentPosition.current.y;
    moonRef.current.rotation.x += 0.0005;
    moonRef.current.rotation.y += 0.0005;
  });

  const materialProps = {
    thickness: 0.37,
    roughness: 0,
    transmission: 1.0,
    ior: 0.11,
    chromaticAberration: 0.11,
    backsideThickness: 1.52,
  };
  return (
    <group
      scale={size.width < 768 ? 1 : 2}
      position={size.width < 768 ? [-1, -2, -3] : [-6, 0, -5]}
    >
      <mesh
        ref={moonRef}
        geometry={nodes.Mesh1.geometry}
        material={nodes.Mesh1.material}
        castShadow
        receiveShadow
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
