import React, { Suspense } from "react";
import {Canvas} from 'react-three-fiber';
import { Environment, OrbitControls , Sky } from "@react-three/drei";
import { Piso3D } from "../components/Piso3D";
import Select from 'react-select'
import * as THREE from 'three';
import { useState } from "react";
import styles from '../styles/Mapas.module.scss';
const options = [{

    lavel : 'Piso 3',
    value : 'Piso3.glb'

},
{

    lavel : 'Piso 2',
    value : 'Piso2.glb'

}
];



const See3D = () => {
    const [search,setSearch]=useState("Piso3.glb");
    const change3dView = (selectedOption) =>{
        console.log(selectedOption.value);
        setSearch(selectedOption.value);
    }
    return(
        <>
            <Select options={options} className={styles.buscador} onChange={change3dView} placeholder='Pisos'/>
            <div style={{ width: '500px' , height:'500px' , margin: '10px auto'}}>
                <Canvas camera={{zoom : .85 , position : [-100 , 250 , -240]}}>
                <ambientLight intensity={.3} />
                <Suspense>
                    <Piso3D selected={search}/>
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