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
    const [selectedPiso,setSelectedPiso]=useState();
    const [selectedLugar,setSelectedLugar]=useState();
    const [svg,setSVG]=useState();
    const [lugares,setLugares]=useState([]);
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
            piso:selectedPiso,
            place:place,
            lugar:selectedLugar
        });
        setSVG(data.svg);
    }
    const handleChangeLugar=async(optionSelected)=>{
        const {data}=await axios.post("/api/services/getPisos",{lugar:optionSelected.value,place:place});
        setPiso(data.pisos);
        setSelectedPiso(undefined);
        setSelectedLugar(optionSelected.value);
    }
    const handleChangePiso=(optionSelected)=>{
        setSelectedPiso(optionSelected.value);
    }
    useEffect(()=>{
        if(places.length==0){
            getData();
        }
        if(lugares.length==0){
            getLugares();
        }
        if(selectedLugar && selectedPiso){
            getSVG();
            document.getElementById("svg").innerHTML=svg;
            console.log(document.getElementsByName("aula"));
        }
    })

    if(places.includes(place)){
        return(
            <>
                <div className={styles.container}><h1>{place}</h1></div>
                <hr></hr>
                <div className={styles.header}>
                    <Select className={styles.buscador} onChange={handleChangeLugar} options={lugares} placeholder='Selecciona un lugar...'></Select>
                    <Select className={styles.buscador} onChange={handleChangePiso} options={piso} placeholder='Selecciona un piso...'></Select>
                </div>
                <div id="svg"></div>
            </>
        )
    }else{
        return(<h1>La busqueda no produjo resultados</h1>)
    }
}

export default Edificio;