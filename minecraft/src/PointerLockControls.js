import React, { useRef } from "react";
import { useThree } from "react-three-fiber";
import { PointerLockControls as PointerLockControlsImpl } from "three/examples/jsm/controls";

export const PointerLockControls = (props) => {
  const { camera, gl } = useThree();
  const controls = useRef();

  return (
    <PointerLockControlsImpl
      ref={controls}
      args={[camera, gl.domElement]}
      {...props}
    />
  );
};
