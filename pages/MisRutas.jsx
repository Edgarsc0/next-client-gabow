import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../styles/Mapas.module.scss'
import favstyle from '../styles/Favoritos.module.scss'
export default function MisRutas(){
    const [routes,setRoutes]=useState([]);
    const [userobj,setUser]=useState({});
    const getUser=async()=>{
        const {data}=await axios.post("/api/auth/getCookie");
        setUser(data.token);
    }
    const getCords=async()=>{
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
            getCords();
        }
    },[userobj]);
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={favstyle.celda}>Town Center</td>
                            <td className={favstyle.celda}>Cinepolis</td>
                            <td className={favstyle.celda}>
                                <Link href="/Ruta"><button type="button" className={styles.button}>Iniciar ruta</button></Link>
                                <button type="button" className={favstyle.button}><lord-icon src="https://cdn.lordicon.com/kfzfxczd.json" trigger="hover" colors="primary:#ffffff" width="32px" height="32px"></lord-icon></button>
                            </td>
                        </tr>
                        <tr>
                            <td className={favstyle.celda}>Town Center</td>
                            <td className={favstyle.celda}>Walmart</td>
                            <td className={favstyle.celda}>
                                <Link href="/Ruta"><button type="button" className={styles.button}>Iniciar ruta</button></Link>
                                <button type="button" className={favstyle.button}><lord-icon src="https://cdn.lordicon.com/kfzfxczd.json" trigger="hover" colors="primary:#ffffff" width="32px" height="32px"></lord-icon></button>
                            </td>
                        </tr>
                        <tr>
                            <td className={favstyle.celda}>CECyT 9</td>
                            <td className={favstyle.celda}>Aula 4.0</td>
                            <td className={favstyle.celda}>
                                <Link href="/Ruta"><button type="button" className={styles.button}>Iniciar ruta</button></Link>
                                <button type="button" className={favstyle.button}><lord-icon src="https://cdn.lordicon.com/kfzfxczd.json" trigger="hover" colors="primary:#ffffff" width="32px" height="32px"></lord-icon></button>
                            </td>
                        </tr>
                        <tr>
                            <td className={favstyle.celda}>CECyT 9</td>
                            <td className={favstyle.celda}>Salon 13</td>
                            <td className={favstyle.celda}>
                                <Link href="/Ruta"><button type="button" className={styles.button}>Iniciar ruta</button></Link>
                                <button type="button" className={favstyle.button}><lord-icon src="https://cdn.lordicon.com/kfzfxczd.json" trigger="hover" colors="primary:#ffffff" width="32px" height="32px"></lord-icon></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}