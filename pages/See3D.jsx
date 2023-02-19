import React, { Suspense } from "react";
import {Canvas} from 'react-three-fiber';
import { Environment, OrbitControls , Sky } from "@react-three/drei";
import { Piso3D } from "../components/Piso3D";
import Select from 'react-select'
import * as THREE from 'three';
import { useState } from "react";
import styles from '../styles/Mapa.module.scss';
const options = [
    {
        label : 'Piso 3',
        value : 'Piso3.glb'
    },
    {
        label : 'Piso 2',
        value : 'Piso2.glb'
    },
    {
        label: "Piso 1",
        value: "Piso1.glb"
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
            <div className={styles.header}>
                <Select options={options} className={styles.buscador} onChange={change3dView} placeholder='Pisos'/>
            </div>
            <div className="containerIni2">
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