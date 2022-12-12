import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../styles/Mapas.module.scss'
export default function MisRutas(){
    const [cords,setCords]=useState([]);
    const [email,setEmail]=useState();
    const getEmail=async()=>{
        const {data}=await axios.post("/api/auth/getCookie");
        setEmail(data.token.email);
    }
    const getCords=async()=>{
        const {data}=await axios.post("/api/services/getRoutes");
    }
    useEffect(()=>{
        getEmail();
    });
    return(
        <>
            <div className={styles.container}>
                <h1>Mis Rutas: {email}</h1>
            </div>
            <hr></hr>
        </>
    )
}