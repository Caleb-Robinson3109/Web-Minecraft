import { usePlane } from "@react-three/cannon";
import { NearestFilter, RepeatWrapping } from "three";
import { texture }
export const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [0,0,0], position: [0,0,0]
    }))

    return (
        <mesh ref={ref}>
            <PlaneBufferGeometry attach='geometry' args = {[100, 100]}></PlaneBufferGeometry>
            <MeshStandardMaterial attach='material' color='hotpink'></MeshStandardMaterial>
        </mesh>
    )
}
