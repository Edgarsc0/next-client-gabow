import React, { useState } from 'react'

import Link from 'next/link'
import styles from '../../styles/Edificio.module.scss'
import { useRouter } from 'next/router'
import Select from 'react-select'

import Aul_piso1 from "../../public/Espacios/Aul_Piso1.svg";
import Aul_piso2 from "../../public/Espacios/Aul_Piso2.svg";
import Aul_piso3 from "../../public/Espacios/Aul_Piso3.svg";
import Aul_PlantaBaja from "../../public/Espacios/Aul_PlantaBaja.svg";
import Espacios_Libres from "../../public/Espacios/Espacios_Libres.svg";
import Ofi_Piso1 from "../../public/Espacios/Ofi_Piso1.svg";
import Ofi_PlantaBaja from "../../public/Espacios/Ofi_PlantaBaja.svg";
import MapGeneral from "../../public/townCenter/map_general.svg";
import TownPb from "../../public/townCenter/town_pb.svg";
import TownPiso1 from "../../public/townCenter/town_piso1.svg";
import TownPiso2 from "../../public/townCenter/town_piso2.svg";

const Edificio = () => {
    const router=useRouter();
    const {place}=router.query;
    const data=[
        {
            label:"Aul_Piso1",
            path:Aul_piso1
        },
        {
            label:"Aul_Piso2",
            path:Aul_piso2
        },
        {
            label:"Aul_Piso3",
            path:Aul_piso3
        },
        {
            label:"Aul_PlantaBaja",
            path:Aul_PlantaBaja
        },
        {
            label:"Espacios_Libres",
            path:Espacios_Libres
        },
        {
            label:"Ofi_Piso1",
            path:Ofi_Piso1
        },
        {
            label:"Ofi_PlantaBaja",
            path:Ofi_PlantaBaja
        }
    ]
    const data2=[
        {
            label:"Map_general",
            path:MapGeneral
        },
        {
            label:"Town_plantaBaja",
            path:TownPb
        },
        {
            label:"Town_piso1",
            path:TownPiso1
        },
        {
            label:"Town_piso2",
            path:TownPiso2
        }
    ]
    const [piso,setPiso]=useState(data[0]);
    const [piso2,setPiso2]=useState(data2[0]);
    console.log(place);
    if(place=="CECyT 9"){
        const cambiar=(selectedOption)=>{
            console.log(selectedOption);
            setPiso(selectedOption);
        }
        //const lista=document.getElementsByTagName("rect");
        document.getElementsByName("Espacio").forEach(function(currentValue) {
            console.log(currentValue);
          },
          'miEsteArg');
        return (
            <>
                <div className={styles.container}>
                    <input className={styles.buscador} type="search" placeholder='Buscar'/>
                    <Select className={styles.buscador} options={data} onChange={cambiar} placeholder='Piso'/>
                    <ShowImage piso={piso}></ShowImage>
                    <Link href="/Ruta"><button type="button" className={styles.button}>Iniciar ruta</button></Link>
                </div>
            </>
        )
    }if(place == 'Town Center'){
        const cambiar2=(selectedOption)=>{
            console.log(selectedOption);
            setPiso2(selectedOption);
        }
        return (
            <>
                <div className={styles.container}>
                    <input className={styles.buscador} type="search" placeholder='Buscar'/>
                    <Select className={styles.buscador} options={data2} onChange={cambiar2} placeholder='Piso'/>
                    <ShowImage width={950} piso={piso2} height={700}></ShowImage>
                    <Link href="/Ruta"><button type="button" className={styles.button}>Iniciar ruta</button></Link>
                </div>
            </>
        )
    }
}

export default Edificio