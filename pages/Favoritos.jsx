import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Favoritos.module.scss'
import Script from 'next/script'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Favoritos = () => {
    const [favs,setFavs]=useState([]);
    const getFavs=async()=>{
        const {data}=await axios.post("/api/services/getFavs");
        console.log(data.favs);
        if(data.status=="ok"){
            setFavs(data.favs);
        }else{
            window.location.href="/Mapas";
        }
    }
    useEffect(()=>{
        if(!favs){
            getFavs();
        }
    });
    return (
        <>
            {/* <Head>
            </Head> */}
            <Script src="https://cdn.lordicon.com/pzdvqjsp.js"></Script>
            <div className={styles.container}>
                <table className={styles.tabla}>
                    <tbody>
                        {favs.map(item=>(
                            <tr key={item.lugar}>
                                <td className={styles.celda}>{item.place}</td>
                                <td className={styles.celda}>{item.lugar}</td>
                                <td>
                                    <Link href={`/Ruta/${item.lugar}`}>
                                        <button type="button" className={styles.button}>Iniciar ruta</button>
                                    </Link>
                                    <Link href={`/EliminarFavs/${item.lugar}`}>
                                        <button type="button" className={styles.button}>
                                            <lord-icon src="https://cdn.lordicon.com/kfzfxczd.json" trigger="hover" colors="primary:#ffffff" width="32px" height="32px"></lord-icon>
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Favoritos