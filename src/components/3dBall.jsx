import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Ball() {
  return (
    <Sphere visible args={[1.2, 32, 64]} scale={2}>
      <MeshDistortMaterial
        color="white"
        attach="material"
        distort={0.4}
        speed={1}
        roughness={0.8}
      />
    </Sphere>
  );
}
