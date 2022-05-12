import { useTexture } from "@react-three/drei";
import moonTexture from "../assets/img/Welcome/lroc_color_poles_2k.jpg";
import moonRough from "../assets/img/Welcome/ldem_4_uint.jpg";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Box } from "@react-three/drei";

export default function Scene() {
  const props = useTexture({
    map: `${moonTexture}`,
    displacementMap: `${moonRough}`,
  });

  const myMesh = useRef();
  const myLight = useRef();
  useFrame(() => {
    myMesh.current.rotation.y += 0.001;
  });
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight
        position={[-2.5, -0.6, 4]}
        intensity={1}
        ref={myLight}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />
      <mesh scale={2.5} ref={myMesh} castShadow>
        <sphereGeometry args={[1.05, 100, 100]} />
        <meshStandardMaterial
          {...props}
          displacementScale={0.04}
          textureScale={0.02}
          roughness={1}
          attach="material"
        />
      </mesh>
    </>
  );
}
