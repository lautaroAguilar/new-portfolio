import React from "react";
import { Stars } from "@react-three/drei";
export default function StarsBackground() {
  return (
    <Stars
      radius={100}
      depth={50}
      count={4000}
      factor={4}
      saturation={0.5}
      fade
      speed={2}
    />
  );
}
