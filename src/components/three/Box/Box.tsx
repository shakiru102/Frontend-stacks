import { useBox } from "@react-three/cannon"
import { MeshWobbleMaterial } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { FC, useState } from "react";


export interface BoxProps {
  position: any;
  args: any;
  factor: number;
  speed: number;
  color: string;
}

const Box: FC<BoxProps> = ({
  args,
  color,
  factor,
  position,
  speed,
  ...props
}) => {
 const [drop, setDrop] = useState<boolean>(false)

    const [ref, api] = useBox(() => ({ mass: 1, position, ...props  }))
    useFrame(() => {
        if(ref.current){
          api.mass.set(0.0)
           !drop ? api.rotation.set(ref.current.rotation.y += 0.01, ref.current.rotation.x += 0.01, 0 ) : null
           if(drop) {
            api.mass.set(1.0)
           }
            // ref.current.rotation.x = ref.current.rotation.y += 0.01
        }
    })

  return (
    // @ts-ignore
    <mesh ref={ref} castShadow onClick={() => setDrop(true)}>
        <boxBufferGeometry args={args}  />
        <MeshWobbleMaterial 
        factor={ !drop ? factor : 0}
        speed={!drop ? speed : 0}
        color={color} />
        {/* <meshStandardMaterial  color={'hotpink'}/> */}
    </mesh>
  )
}

export default Box