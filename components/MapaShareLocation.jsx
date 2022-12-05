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

const icon = new Icon({
    iconUrl: '/current.svg',
    iconSize: [25,25]
})
//escuela: 19.45371285983326, -99.17530557712774
//town center: 19.503565296138603, -99.20305358194275
const socket=io("http://localhost:8000");
const Mapa = ({visibility,dest}) => {
    //<Marker icon={icon} position={data}></Marker>
    if(visibility){
        console.log(dest);
        const mapRef = useRef();
        const [cord, setCord] = useState([19.472819274952897, -99.14333273147834])
        const [data,setData]=useState([19.472819274952897, -99.14333273147834]);
        const success=(position)=>{
            const mapC = mapRef.current;
            mapC.flyTo([position.coords.latitude,position.coords.longitude],18,{duration:2});
            setData([position.coords.latitude,position.coords.longitude]);
            socket.emit("newCor",{cor:[position.coords.latitude,position.coords.longitude],to:dest});
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
            const idWatchPosition=navigator.geolocation.watchPosition(success,error,options);
            console.log(data);        
        });
        return (
            <>
                <Head>
                    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin="" />
                </Head>
                <h1>Compartiendo ubicacion en tiempo real</h1><hr></hr>
                <div className={styles.container}>
                    <MapContainer ref={mapRef} center={cord} zoom={20}>
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
}

export default Mapa