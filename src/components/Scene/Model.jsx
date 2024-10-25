import React, { useEffect, useRef } from "react";
import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export default function Model() {
  const { nodes } = useGLTF("medias/bear2.glb");
  const { viewport, size } = useThree();
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.001;
    mesh.current.rotation.y += 0.001;
  });

  const materialProps = {
    thickness: 0.35,
    backsideThickness: 0.2,
    transmission: 0.99,
    roughness: 0.1,
    ior: 0.28,
    chromaticAberration: 0.1,
    backside: true,
  };
  useEffect(() => {
    console.log(size);
  }, []);
  return (
    <group
      scale={size.width < 768 ? viewport.width / 3.5 : viewport.width / 7}
      position={size.width < 768 ? [1, 2, -1] : [2, 1, -1]}
    >
      <mesh
        ref={mesh}
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
