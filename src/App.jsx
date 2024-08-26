
import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"

import Cyl from "./Cyl"
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
const App = () => {
 //let tex= useTexture("./image.png")
 //tex.needsUpdate=true;
  return (
  
    <>
    <Canvas camera={{fov:35}}>
      
      <ambientLight/>
     <Cyl/>
     <EffectComposer>

<Bloom
    intensity={12.0} // The bloom intensity.
    mipmapBlur
    luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]  
  />
 // <ToneMapping adaptive/>
</EffectComposer>
    </Canvas>
    <div className="w-full bg-black py-32"
    >
      <h1 className='text-white'>Potfolio</h1>
    </div>
    </>
  )
}

export default App
