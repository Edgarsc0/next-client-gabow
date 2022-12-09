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
    const [visible,setVisible]=useState();
    const [place,setPlace]=useState();
    const handleRedirectModify=async()=>{
        const {data}=await axios.post("/api/services/getPlaceById",{id:destino});
        window.location.href=`/Edificio/${data.place}`;
    }
    const validarBusqueda=async()=>{
        const{data}=await axios.post("/api/services/getPlaceById",{id:destinoState});
        if(data.status!="ok"){
            toast.error('Ups! El lugar destino no existe en la bd.', {
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
        }else{
            setPlace(data.place);
        }
    }
    const handleInit=()=>{
        setVisible(true);
    }
    useEffect(()=>{
        setDestinoState(destino);
        if(destinoState){
            validarBusqueda();
        }
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
                        <h1>{destino}</h1>
                        <br />
                        <div>Lugar: {place}</div>
                        <br />
                        <button type="button" className={styles.button} onClick={handleInit}>Iniciar Ruta</button>
                        <button onClick={handleRedirectModify} type="button" className={styles.button}>Modificar Destino</button>
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
            <MyAwesomeMap visibility={visible}/>
        </>
    );
}
export default Ruta;