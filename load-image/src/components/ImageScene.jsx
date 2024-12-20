import { useFrame, useLoader } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { DoubleSide, TextureLoader } from "three"

function ImageScene({ texture }) {
  // Esta parte se encarga de la animación y de guardar la referencia al objeto que se va a animar
  const meshRef = useRef()

  useFrame(() => {
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
  })

  // Carga la textura de la imagen guardada en /public  
  if(typeof(texture) === "string") {
    texture = useLoader(TextureLoader, texture)
  }
  


  
    return (
      <mesh ref={meshRef}>
        <planeGeometry args={[16, 9]} />
        <meshBasicMaterial map={texture} side={DoubleSide} />
      </mesh>
    );
}

export default ImageScene;
