import './App.css'
import { useState } from 'react'
import ImageCanvas from './components/ImageCanvas'
import ImageInput from './components/ImageInput'

function AppInfo({ info, fileInfo }) {
  return (
    <div id="app-info">
      <p>{info || "Nothing to say"}</p>
      <p>{fileInfo || "No file"}</p>
    </div>
  )
}

function App() {
  const [texture, setTexture] = useState('zenitsu.png')
  const [info, setInfo] = useState("")
  const [fileInfo, setFileInfo] = useState("")
  
  return (
    <>
      <ImageInput setTexture={setTexture} setInfo={setInfo} setFileInfo={setFileInfo} />
      <ImageCanvas texture={texture} />
      <AppInfo info={info} fileInfo={fileInfo} />
    </>
  )
}

export default App
