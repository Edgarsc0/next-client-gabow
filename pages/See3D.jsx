import React, { Suspense } from "react";
import {Canvas} from 'react-three-fiber';
import { Environment, OrbitControls , Sky } from "@react-three/drei";
import { Piso33D } from "../components/Piso33D";
import * as THREE from 'three';

const See3D = () => {

    return(
        <>
            <h1>PENE</h1>
            <div style={{ width: '500px' , height:'500px' , margin: '0px auto'}}>
                <Canvas camera={{zoom : .85 , position : [-100 , 250 , -240]}}>
                <ambientLight intensity={.3} />
                <Suspense>
                    <Piso33D/>
                </Suspense>
                <OrbitControls/>
                <Environment background>
                    <mesh>
                    <sphereGeometry args={[50 , 100 , 100]}/>
                    <meshBasicMaterial side={THREE.BackSide} color="#365285"/>
                    </mesh>
                </Environment>
                </Canvas>
            </div>
        </>
    )

}

export default See3D;