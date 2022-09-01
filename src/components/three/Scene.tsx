import { Physics } from "@react-three/cannon"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { angleToRadian } from "../../utils"
import Box, { BoxProps } from "./Box/Box"
import Plane from "./surface/Plane"


const Scene = () => {

  const boxes: BoxProps[]  = [
     { args: [1, 0.7, 0.3], color: 'hotpink', factor: 1, speed: 0.5, position: [0, 4, 5] }, 
     { args: [0.7, 0.7, 0.5], color: 'lightblue', factor: 1.5, speed: 2, position: [-2.5, 3, 6] }, 
     { args: [0.7, 0.7, 0.5], color: '#B39DDB', factor: 1.5, speed: 2, position: [2.5, 3, 6] } ,
     { args: [0.7, 0.7, 0.5], color: '#FFCC80', factor: 1.5, speed: 3, position: [-2.5, 3, 0] } ,
     { args: [0.7, 0.7, 0.5], color: '#9FA8DA', factor: 1.5, speed: 3, position: [2.5, 3, 0] } 
  ]

  return (
    <Canvas id="container"  shadows>
        <Suspense fallback={null}>
            <PerspectiveCamera  makeDefault position={[0, angleToRadian(80), 13]}/>
            {/* <OrbitControls /> */}
            <Physics >
               { boxes.map((item, index )=> <Box key={index} {...item} />)  }
                <Plane />
            </Physics>
            <spotLight intensity={0.8} position={[-5, 5, 0]} />
            <spotLight intensity={0.8} position={[0, -5, 0]} />
            <directionalLight intensity={1.5} position={[0, 8, 2]} castShadow/> 
            <ambientLight intensity={0.3} />
        </Suspense>
    </Canvas>
  )
}

export default Scene