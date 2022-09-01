import { usePlane } from "@react-three/cannon"
import { angleToRadian } from "../../../utils"




const Plane = (props: any) => {

  const [ ref ] = usePlane(() => ({ ...props, rotation: [-angleToRadian(90), 0, 0] }))

  return (
    // @ts-ignore
    <mesh ref={ref} receiveShadow >
      <planeBufferGeometry args={[10, 20]}  />
      {/* <shaderMaterial transparent opacity={0.3} /> */}
      <meshStandardMaterial  color={'white'}/>
    </mesh>
  )
}

export default Plane