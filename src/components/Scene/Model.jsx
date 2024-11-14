import React, { useEffect, useRef } from "react";
import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useAppContext } from "@/context/appContext";

export default function Model() {
  const { nodes } = useGLTF("medias/bear2.glb");
  const { viewport, size } = useThree();
  const { mousePosition } = useAppContext();
  const mesh = useRef();

  const currentPosition = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (mesh.current) {
      const factor = -0.4; // Ajusta este factor para cambiar la intensidad del movimiento
      const lerpFactor = 0.05; // Ajusta este factor para cambiar la suavidad del movimiento

      // Interpolación de la posición
      currentPosition.current.x += (mousePosition.x * factor - currentPosition.current.x) * lerpFactor;
      currentPosition.current.y += (mousePosition.y * factor - currentPosition.current.y) * lerpFactor;

      mesh.current.position.x = currentPosition.current.x;
      mesh.current.position.y = currentPosition.current.y;

      mesh.current.rotation.x += 0.0005;
      mesh.current.rotation.y += 0.001;
    }
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
  }, [size]);

  return (
    <group
      scale={size.width < 768 ? viewport.width / 3.5 : viewport.width / 6}
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
