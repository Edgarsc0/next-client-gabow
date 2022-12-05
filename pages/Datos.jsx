// import axios from 'axios'
import Head from 'next/head'
import React, { useState } from 'react'
import { useEffect } from 'react';
import styles from '../styles/Datos.module.scss'
import axios from "axios";
import jwt from 'jsonwebtoken';

const Datos = () => {
    const [data,setData]=useState({info:"Esperando informacion..."});
    const getData=async()=>{
        const response=await axios.post("/api/auth/getCookie");
        const {status}=response.data;
        if(status=="Invalid token"){
            
        }if(status=="Token verified"){
            console.log(response.data.token)
            setData(response.data.token);
        }
    }
    useEffect(()=>{
        getData();
    },[]);
    const handleLogOut=async()=>{
        document.cookie = 'params=;max-age=0';
        window.location.href="/Mapas";
    }
    return (
        <>
            <Head>
                <title>GABOW</title>
            </Head>
            <div className={styles.container}>
                <table className={styles.tabla}>
                    <tbody>
                        <tr>
                            <td className={styles.celda}>Nombre: {data.user}</td>
                            <td className={styles.celda}><button className={styles.button}>Editar</button></td>
                        </tr>
                        <tr>
                            <td className={styles.celda}>Correo: {data.email}</td>
                            <td className={styles.celda}><button className={styles.button}>Editar</button></td>
                        </tr>
                        <tr>
                            <td className={styles.celda}><button onClick={handleLogOut}>Cerrar Sesion</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Datos