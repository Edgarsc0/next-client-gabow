import React, { useState } from 'react';
import Head from 'next/head'
import styles from '../../styles/Ruta.module.scss'
import { useRouter } from 'next/router'
import axios from 'axios';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dynamic from "next/dynamic"
const MyAwesomeMap = dynamic(() => import("../../components/Ruta"), { ssr:false });
const Ruta = () => {
    const router=useRouter();
    const {destino}=router.query;
    const [destinoState,setDestinoState]=useState();
    const [data,setData]=useState([]);
    const [visible,setVisible]=useState();
    const handleRedirectModify=async()=>{
        const {data}=await axios.post("/api/services/getPlaceById",{id:destino});
        window.location.href=`/Edificio/${data.place}`;
    }
    const validarBusqueda=async()=>{
        const{data}=await axios.post("/api/services/getPlaceById",{id:destinoState});
        if(data.status!="ok"){
            toast.error('Ups! Algo fallo al intentar registrar las credenciales. Intentalo de nuevo mas tarde. ', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            window.location.href="/Mapas";
        }
    }
    const success=(position)=>{
        
        setData([...data,[position.coords.latitude,position.coords.longitude]]);
    }
    const error=(error)=>{
        console.log(error);
    }
    const options={
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0
    }
    useEffect(()=>{
        setDestinoState(destino);
        if(destinoState){
            validarBusqueda();
        }
        globalThis.idWatchPosition=navigator.geolocation.watchPosition(success,error,options);
        console.log(data);
    });
    return (
        <>
            <Head>
                <title>GABOW</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
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
            <MyAwesomeMap usercords={data}/>
        </>
    );
}
export default Ruta;