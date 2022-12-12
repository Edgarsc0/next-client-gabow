import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../styles/Mapas.module.scss'
import favstyle from '../styles/Favoritos.module.scss'
import Script from 'next/script'
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
        setRoutes(data.info);
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
            <div className={styles.container3}>
                <h1>Mis Rutas: {userobj.user}</h1>
            </div>
            <hr></hr>
            <div className={favstyle.container}>
                <table className={favstyle.tabla}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Origen</th>
                            <th>Destino</th>
                            <th>Dia</th>
                            <th>Mes</th>
                            <th>Año</th>
                            <th>Lugar</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {routes.map(item=>(
                                <tr key={item.id_ruta}>
                                    <td className={favstyle.celda}>{item.id_ruta}</td>
                                    <td className={favstyle.celda}>{item.rut_origen}</td>
                                    <td className={favstyle.celda}>{item.rut_destino}</td>
                                    <td className={favstyle.celda}>{item.rfc_dia}</td>
                                    <td className={favstyle.celda}>{item.rfc_mes}</td>
                                    <td className={favstyle.celda}>{item.rfc_anno}</td>
                                    <td className={favstyle.celda}>{item.esg_nombre}</td>
                                    <td>
                                        <Link href={`/ConsultarRuta/${item.id_ruta}`}>
                                            <button type="button" className={styles.button}>Consultar ruta</button>
                                        </Link>
                                        <Link href={`/EliminarRuta/${item.id_ruta}`}>
                                            <button type="button" className={styles.button}>
                                                <lord-icon src="https://cdn.lordicon.com/kfzfxczd.json" trigger="hover" colors="primary:#ffffff" width="32px" height="32px"></lord-icon>
                                            </button>
                                        </Link>
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