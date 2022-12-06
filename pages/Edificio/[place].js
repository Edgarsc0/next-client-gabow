import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Select from 'react-select'
import axios from "axios";
import styles from '../../styles/Mapas.module.scss';
const Edificio=()=>{
    const router=useRouter();
    const {place}=router.query;
    const [places,setPlaces]=useState([]);
    const [piso,setPiso]=useState("PB");
    const [svg,setSVG]=useState();
    const [lugares,setLugares]=useState([{
        label:"Esperando bd...",
        value:null
    }]);
    const getData=async()=>{
        const {data}=await axios.post("/api/services/getPlaces");
        console.log(data);
        setPlaces(data.places);
    }
    const getLugares=async()=>{
        const {data}=await axios.post("/api/services/getLugares",{place:place});
        console.log(data.lugares);
        setLugares(data.lugares);
    }
    const getSVG=async()=>{
        const {data}=await axios.post("/api/services/getSVG",{
            piso:piso,
            place:place
        });
    }   
    useEffect(()=>{
        if(places.length==0){
            getData();
        }
        getLugares();
    })
    /*const dataprueba=[{
        label:"EdifAulas",
        value:"12"
    },{
        label:"EdifGobierno",
        value:"12"
    }]*/
    if(places.includes(place)){
        return(
            <>
                {place}
                <Select className={styles.buscador} options={lugares} placeholder='buscar'></Select>
            </>
        )
    }else{
        return(<h1>La busqueda no produjo resultados</h1>)
    }
}

export default Edificio;