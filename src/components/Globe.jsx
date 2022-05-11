import { useTexture } from "@react-three/drei";
import moonTexture from "../assets/img/Welcome/lroc_color_poles_2k.jpg";
import moonRough from "../assets/img/Welcome/ldem_4_uint.jpg";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Scene() {
  const props = useTexture({
    map: `${moonTexture}`,
    displacementMap: `${moonRough}`,
  });

  const myMesh = useRef();
  useFrame(() => {
    myMesh.current.rotation.y += 0.0014;
  });
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight castShadow position={[10, 10, 10]} intensity={0.8} />
      <mesh scale={2.5} ref={myMesh} castShadow>
        <sphereGeometry args={[1.05, 100, 100]} />
        <meshStandardMaterial
          {...props}
          displacementScale={0.02}
          textureScale={0.02}
          roughness={1}
          attach="material"
        />
      </mesh>
    </>
  );
}
