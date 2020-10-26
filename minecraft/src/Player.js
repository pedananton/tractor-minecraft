import React from "react";
import { useFrame, useThree } from "react-three-fiber";
import { useSphere } from "use-cannon";

export const Player = (props) => {
  const {camera} = useThree()
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 10, 0],
    ...props,
  }));

  useFrame(() => {
    camera.position.copy(ref.current.position)
  })

  return (
    <>
     <PointerLockControls/>
      <mesh ref={ref} />
    </>
  );
};
