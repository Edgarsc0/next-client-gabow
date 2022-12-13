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
        if(JSON.parse(window.localStorage.getItem("favs")).length==0){
            window.location.href="/Mapas";
        }else{
            setFavs(JSON.parse(window.localStorage.getItem("favs")));
        }
    }
    const removeFavorite=id=>{
        console.log(id);
        const localStorageList = JSON.parse(window.localStorage.getItem('favs'));
        console.log(localStorageList.find(item=>item.lugar == id));
        const newLocalStorageList = localStorageList.filter(item=>item.lugar != id);
        console.log(newLocalStorageList);
        window.localStorage.setItem("favs",JSON.stringify(newLocalStorageList));
        window.location.reload();
    }
    
    useEffect(()=>{
        if(favs.length==0){
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
                                    <button type="button" className={styles.button} onClick={()=>removeFavorite(item.lugar)}>
                                        <lord-icon src="https://cdn.lordicon.com/kfzfxczd.json" trigger="hover" colors="primary:#ffffff" width="32px" height="32px"></lord-icon>
                                    </button>
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