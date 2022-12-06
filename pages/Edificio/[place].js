import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import axios from "axios";
const Edificio=()=>{
    const router=useRouter();
    const {place}=router.query;
    const [places,setPlaces]=useState([]);
    const getData=async()=>{
        const {data}=await axios.post("/api/services/getPlaces");
        console.log(data);
        setPlaces(data.places);
    }   
    useEffect(()=>{
        if(places.length==0){
            getData();
        }
    })
    if(places.includes(place)){
        return(<h1>Correcto</h1>)
    }else{
        return(<h1>La busqueda no produjo resultados</h1>)
    }
}

export default Edificio;