import { Suspense } from "react";
import { Physics } from "@react-three/cannon";

import MainStage from "./MainStage";
import Player from "./Player";
import Camera from "./Camera";

const DefaultScene = () => {
  return (
    <>
      <Camera />
      <Physics
        gravity={[0, -18, 0]}
        tolerance={0}
        iterations={50}
        broadphase={"SAP"}
      >
        <MainStage />
        <Player />
      </Physics>
    </>
  )
}

export default DefaultScene;