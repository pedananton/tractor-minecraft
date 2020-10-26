import React from "react";
import { Canvas } from "react-three-fiber";
import { Vector3 } from "three";
import { Camera } from "./Camera";
import { Ground } from "./Ground";

function App() {
  return (
    <Canvas>
      <Camera />
      <Sky sunPosition={new Vector3(100, 10, 100)} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <Physics gravity={[0, -30, 0]}>
        <Ground />
        <Player/>
      </Physics>
    </Canvas>
  );
}

export default App;
