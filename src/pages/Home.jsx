import React, { useState } from 'react'
import {Canvas} from '@react-three/fiber'
import {Suspense} from 'react'
import { Loader} from '@react-three/drei'
import Island from '../models/Island'
import Bird from '../models/Bird'
import Sky from '../models/Sky'
import Plane from '../models/Plane'

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'> 
POPUP
</div> */}

const Home = () => {
  const [isRotating,setIsRotating]=useState(false);
  const adjustScreen=()=>{
    let ScreenScale=null;
    let ScreenPosition=[0,-6.5,-43];
    let Rotation=[-6.2,-4.7,0];
    if(innerWidth<768)
    {
      ScreenScale=[0.8,0.8,0.8];
    }
    else
    {
      ScreenScale=[0.9,0.9,0.9];
    }

    return [ScreenPosition,ScreenScale,Rotation];
  }

  const adjustPlaneScreen=()=>{
    let ScreenScale=null;
    let ScreenPosition=[0,-6.5,-43];
    // let Rotation=[-6.2,-4.7,0];
    if(innerWidth<768)
    {
      ScreenScale=[1.5,1.5,1.5];
      ScreenPosition=[0,-1.5,0];
    }
    else
    {
      ScreenScale=[3,3,3];
      ScreenPosition=[0,-4,-4];
    }

    return [ScreenPosition,ScreenScale];
  }

  const [IslandPosition,IslandScale,IslandRotation]=adjustScreen();
  const [PlanePosition,PlaneScale]=adjustPlaneScreen();
  return (
    <section className='w-full h-screen relative'>
      <Canvas
      className={`w-full h-screen relative ${isRotating ? 'cursor-grabbing' 
      :'cursor-grab'}`}
      camera={{near:0.1, far: 1000}}
      >
      <Suspense fallback={<Loader/>}>
      <directionalLight position={[-3,5,1]} intensity={2}/>
      <ambientLight/>
      <pointLight/>
      <spotLight/>
      <hemisphereLight/>
      <Sky/>
      <Bird/>
      <Island position={IslandPosition} scale={IslandScale}
      rotation={IslandRotation} 
      isRotating={isRotating}
      setIsRotating={setIsRotating}
      />
      <Plane position={PlanePosition} 
      scale={PlaneScale}
      isRotating={isRotating}
      rotation={[0,20,0]}
      />
      </Suspense>
      </Canvas>

    </section>
  )  
}

export default Home