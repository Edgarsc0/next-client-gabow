import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../styles/Mapas.module.scss'
export default function MisRutas(){
    const [cords,setCords]=useState([]);
    const [userobj,setUser]=useState({});
    const getEmail=async()=>{
        const {data}=await axios.post("/api/auth/getCookie");
        setUser(data.token);
    }
    const getCords=async()=>{
        const {data}=await axios.post("/api/services/getRoutes");
    }
    useEffect(()=>{
        
    });
    return(
        <>
            <div className={styles.container3}>
                <h1>Mis Rutas: {userobj.user}</h1>
            </div>
            <hr></hr>
        </>
    )
}