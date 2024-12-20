import './App.css'
import { useCallback, useRef, useState } from 'react'
import ImageCanvas from './components/ImageCanvas'
import { Texture } from 'three'
import { useTexture } from "@react-three/drei"

function ImageInput({ setTexture }) {
  const inputRef = useRef()
  
  const handleClick = useCallback(() => {
    inputRef.current?.click()
  }, [])
  
  // convierte la imagen ingresada en textura
  const handleChange = useCallback((e) => {
    e.preventDefault()
    const file = inputRef.current?.files[0]

    if(file.type.split("/")[0] === "image") {
      const image = document.createElement("img");
      
      console.log("reading file...")

      image.file = file
      
      const reader = new FileReader();
      reader.onload = (e) => {
        image.src = e.target.result;
      };
      reader.readAsDataURL(file);
  
      const newTexture = new Texture(image)
      newTexture.needsUpdate = true
  
      setTexture(newTexture)
    } else {
      console.log("Something went wrong reading the file")
    }
  }, [])
  
  return(
    <section className='upload'>
      <input
        ref={inputRef}
        type="file"
        id="user-input"
        accept=".jpg, .jpeg, .png"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Selecciona una imagen</button>
    </section>
  )
}

function App() {
  const [texture, setTexture] = useState('zenitsu.png')
  
  return (
    <>
      <ImageInput setTexture={setTexture} />
      <ImageCanvas texture={texture} />
    </>
  )
}

export default App
