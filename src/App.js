import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import DefaultScene from "./DefaultScene";

export default function Viewer() {
  return (
    <>
      <Canvas shadows dpr={[1, 2]}>
        <DefaultScene />
      </Canvas>
      <Loader />
    </>
  );
}
