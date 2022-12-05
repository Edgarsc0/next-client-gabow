import React, { useState, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import styles from '../styles/Mapas.module.scss'
import Select from 'react-select'
import { useEffect } from 'react'
import axios from 'axios'
import io from "socket.io-client";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const icon = new Icon({
    iconUrl: '/current.svg',
    iconSize: [25,25]
})
const socket=io("https://auth-server-express-production.up.railway.app/");
export default function MapaViewLocation(){
    const mapRef = useRef();
    const mapC=mapRef.current;
    const [userLocation,setUserLocation]=useState([]);
    const [fromUser,setFromUser]=useState("Esperando Ubicación...");
    const [data,setData]=useState([19.472819274952897, -99.14333273147834]);
    const [cookie,setCookie]=useState("");
    const [lastUpdate,setLastUpdate]=useState();
    socket.on("newCor",({cor,to,from,at})=>{
        console.log("cor recieved");
        console.log(`socket emitido en: ${at}`);
        if(to.includes(cookie)){
            console.log("aceptado");
            setUserLocation(cor);
            setFromUser("Visualizando ubicación de: "+from);
            setLastUpdate("Ultima vez actualizado: Hace "+(-Date.now()+at)/1000+"s");
        }else{
            console.log("user not in 'to' list");
        }
    })
    socket.on("stopWp",({to})=>{
        console.log("evento stopWp recibido");
        if(to.includes(cookie)){
            socket.disconnect();
            toast.success('Se dejo de compartir ubicación.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            window.location.href="/Mapas";
        }else{
            console.log("user not in 'to' list");
        }
    })
    useEffect(()=>{
        const getData=async()=>{
            const response=await axios.post("/api/auth/getCookie");
            const {status,token}=response.data;
            console.log(status);
            if(status=="Token verified"){
                const email=token.email;
                setCookie(email);
                console.log(email);
            }else{
                toast.success('Ups! La sesion no es valida. Prueba volviendo a iniciar sesion.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                console.log("Invalid Session");
                socket.disconnect();
            }
            /*const email=response.data.token.email;
            setCookie(email);
            console.log(email);*/
        }
        if(!cookie){
            getData();
        }
        if(!userLocation.length==0){
            mapC.flyTo(userLocation,18,{duration:2});
            setData(userLocation);
        }
    })
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin="" />
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
                <h1>{fromUser}</h1>
                <h3>{lastUpdate}</h3>
            <div className={styles.container}>
                <MapContainer ref={mapRef} center={[19.472819274952897, -99.14333273147834]} zoom={11}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />         
                    <Marker position={data} icon={icon}/>  
                </MapContainer>
            </div>
        </>
    )
}