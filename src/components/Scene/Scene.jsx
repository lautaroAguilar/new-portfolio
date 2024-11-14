import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./Model";
import StarsBackground from "./Stars";
import Moon from "./Moon";
export default function Scene() {
  return (
    <Canvas style={{ position: "absolute" }}>
      <directionalLight intensity={3} position={[2, -2, 3]} />
      <Environment preset="forest" />
      <Model />
      <Moon />
      <StarsBackground />
    </Canvas>
  );
}
