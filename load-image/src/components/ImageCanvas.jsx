import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ImageScene from "./ImageScene";

function ImageCanvas({ texture }) {
  return(
    <div id="canvas-container">
      <Suspense fallback={null}>
    
        <Canvas
          orthographic
          camera={{ zoom: 30, position: [2.5, 5, 10] }}
        >
          <ambientLight />
          <ImageScene texture={texture} />
        </Canvas>
    
      </Suspense>
    </div>
  )
}

export default ImageCanvas;
