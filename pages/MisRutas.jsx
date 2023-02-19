import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../styles/Mapa.module.scss'
import favstyle from '../styles/Favoritos.module.scss'
import Script from 'next/script'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'
export default function MisRutas(){
    const [routes,setRoutes]=useState([]);
    const [userobj,setUser]=useState({});
    const getUser=async()=>{
        const {data}=await axios.post("/api/auth/getCookie");
        setUser(data.token);
    }
    const getRoutes=async()=>{
        const {data}=await axios.post("/api/services/getRoutes",{
            user:userobj.email
        });
        console.log(data);
        if(data.info.length==0){
            window.location.href="/Mapas";
        }else{
            setRoutes(data.info);
        }
    }
    const handleDeleteRoute=async(id)=>{
        const {data}=await axios.post("/api/services/deleteRoute",{
            id:id
        });
        if(data.status=="ok"){
            window.location.reload();
        }else{
            toast.error('Ups! Algo salio mal! Error:'+data.error, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }   
    useEffect(()=>{
        if(!userobj.user){
            getUser();
        }else{
            if(routes.length==0){
                getRoutes();
            }
        }
    });
    return(
        <>
            <Script src="https://cdn.lordicon.com/pzdvqjsp.js"></Script>
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
                theme="colored"
            />
            <div className={styles.container3}>
                <h1>Mis Rutas: {userobj.user}</h1>
            </div>
            <div className={favstyle.container}>
                <table className={favstyle.tabla}>
                    <thead>
                        <tr>
                            <th>Origen</th>
                            <th>Destino</th>
                            <th>Lugar</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {routes.map(item=>(
                                <tr key={item.id_ruta}>
                                    <td className={favstyle.celda}>{item.rut_origen}</td>
                                    <td className={favstyle.celda}>{item.rut_destino}</td>
                                    <td className={favstyle.celda}>{item.esg_nombre}</td>
                                    <td>
                                        <Link href={`/ConsultarRuta/${item.id_ruta}`}>
                                            <button type="button" className={styles.button}>Consultar ruta({item.id_ruta})</button>
                                        </Link>
                                        <button type="button" className={styles.button} onClick={()=>handleDeleteRoute(item.id_ruta)}>
                                            <lord-icon src="https://cdn.lordicon.com/kfzfxczd.json" trigger="hover" colors="primary:#ffffff" width="32px" height="32px"></lord-icon>
                                        </button>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}