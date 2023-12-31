import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Shoe from "./Shoe";

export const ProductDesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Shoe />
      </Stage>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};
