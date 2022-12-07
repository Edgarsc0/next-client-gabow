import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Select from 'react-select'
import axios from "axios";
import styles from '../../styles/Mapas.module.scss';
const Edificio=()=>{
    const router=useRouter();
    const {place}=router.query;
    const [places,setPlaces]=useState([]);
    const [piso,setPiso]=useState([]);
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
    const handleChange=async(optionSelected)=>{
        const {data}=await axios.post("/api/services/getPisos",{lugar:optionSelected.value,place:place});
        setPiso(data.pisos);
    }   
    useEffect(()=>{
        if(places.length==0){
            getData();
        }
        getLugares();
        if(lugares && piso){
            document.getElementById("svgcontainer").innerHTML="<h1>hola</h1>";
        }
    })
    if(places.includes(place)){
        return(
            <>
                <h1>{place}</h1>
                <Select className={styles.buscador} onChange={handleChange} options={lugares} placeholder='Selecciona un lugar...'></Select>
                <Select className={styles.buscador} options={piso} placeholder='Selecciona un piso...'></Select>
                <div id="svgcontainer"></div>
            </>
        )
    }else{
        return(<h1>La busqueda no produjo resultados</h1>)
    }
}

export default Edificio;