import React, { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Ruta.module.scss'
import { useRouter } from 'next/router'
import axios from 'axios';
import { useEffect } from 'react';

const Ruta = () => {
    const router=useRouter();
    const {destino}=router.query;
    const handleRedirectModify=async()=>{
        const {data}=await axios.post("/api/services/getPlaceById",{id:destino});
        window.location.href=`/Edificio/${data.place}`;
    }
    const validarBusqueda=async()=>{
        const {data}=await axios.post("/api/services/getPlaceById",{id:destino});
        if(data.status!="ok"){
            window.location.href="/Mapas";
        }
    }
    useEffect(()=>{
        validarBusqueda();
    });
    return (
        <>
            <Head>
                <title>GABOW</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.ruta}>
                    <div>
                        <br />
                        <h1>Ruta:</h1>
                        <h1>Cinepolis</h1>
                        <br />
                        <div>Origen: Primer piso</div>
                        <div>Lugar: {destino}</div>
                        <br />
                        <button onClick={handleRedirectModify} type="button" className={styles.button}>Modificar Destino</button>
                        <button type="button" className={styles.button}>Finalizar Ruta</button>
                    </div>
                    <div>
                        <br />
                        <h2>Instrucciones</h2>
                        <div>Continua Derecho</div>
                        <div>Gira a la derecha</div>
                        <div>Avanza 100m</div>
                    </div>
                    <div></div>
                    <br />
                    <h2>Descripcion</h2>
                    <div>
                        <div>¡Agregar una descripcion!</div>
                        <div>
                            <div>
                                <label htmlFor='comment'></label>
                                <textarea rows="5" id="comment"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Ruta;