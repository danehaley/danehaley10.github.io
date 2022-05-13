import { useTexture, Text } from "@react-three/drei";
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

export function TextSphere(props) {
  const myMesh = useRef();
  const myLight = useRef();
  useFrame(() => {
    myMesh.current.rotation.y += 0.005;
  });
  const fontProps = {
    fontSize: 0.4,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  return (
    <>
      <ambientLight intensity={1} />
      <mesh scale={2.5} ref={myMesh} castShadow>
        <Text
          color={
            props.colors.text === "-1" || props.colors.text === "default"
              ? "black"
              : `hsl(${props.colors.text}, 100%, 50%)`
          }
          {...fontProps}
        >
          {props.text}
        </Text>
        <sphereGeometry args={props.args} />
        <meshStandardMaterial
          color={
            props.colors.wireframe === "-1" ||
            props.colors.wireframe === "default"
              ? "gray"
              : `hsl(${props.colors.wireframe}, 100%, 50%)`
          }
          roughness={1}
          attach="material"
          wireframe={true}
          wireframeLinewidth={100}
        />
      </mesh>
    </>
  );
}
