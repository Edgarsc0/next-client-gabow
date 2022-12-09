import React, { useState, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import styles from '../styles/Mapas.module.scss'
import Select from 'react-select'
import { useEffect } from 'react'
import axios from 'axios'

const icon = new Icon({
    iconUrl: '/current.svg',
    iconSize: [25, 25]
})
//escuela: 19.45371285983326, -99.17530557712774
//town center: 19.503565296138603, -99.20305358194275
const Ruta = ({usercords}) => {
    
    const mapRef = useRef();
    const mapC=mapRef.current;
    if(usercords){
        console.log(usercords);
        mapC.flyTo(usercords[usercords.length-1],18,{duration:2})
        return (
            <>
                <Head>
                    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin="" />
                </Head>         
                <div className={styles.container}>
                    <MapContainer ref={mapRef} center={[19.472819274952897, -99.14333273147834]} zoom={11}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {usercords.map((item) => (
                            <Marker key={item} position={item} icon={icon}></Marker>
                        ))}
                    </MapContainer>
                </div>
            </>
        )
    }
}

export default Ruta;