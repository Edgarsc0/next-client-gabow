import React, { useState, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import { Icon, map } from 'leaflet'
import styles from '../styles/Mapa.module.scss'
import Select from 'react-select'
import { useEffect } from 'react'
import axios from 'axios'
import Ley from './Ley'

// const icon = new Icon({
//     iconUrl: '/marker.svg',
//     iconSize: [50, 50]
// })

//escuela: 19.45371285983326, -99.17530557712774
//town center: 19.503565296138603, -99.20305358194275
const Mapa = () => {
    
    const mapRef = useRef();
    const [cord, setCord] = useState([19.472819274952897, -99.14333273147834])

    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     console.log(data);
    // },[data])
    // useEffect(()=>{
    //     async function getData(){
    //         const response=await axios.post("/api/services/getPlaces");
    //         setData(response.data.info);
    //     }
    //     getData();
    // },[]);  

    // DATA PARA LA PRESENTACION
    const data = [
        {
            id: 1,
            label: "CECyT 9",
            value: [19.453541614839263, -99.1755475346185],
            type: "escuela"
        },
        {
            id: 2,
            label: "Town Center",
            value: [19.50353658790755, -99.20293583642929],
            type: "plaza"
        }
    ];
    // ICONOS PARA LA PRESENTACION
    function icono(type) {
        const icon = new Icon({
            iconUrl: '/icons/' + type + '.png',
            iconSize: [50, 50]
        })
        return icon
    }
    
    const cambiar = selectedOption => {
        const mapC = mapRef.current;
        console.log(mapC.e);
        console.log(mapC);
        console.log(mapC.options.onClick);
        const handler=mapC.options.onClick;
        handler();
        mapC.flyTo(selectedOption.value, 18, {
            duration: 2
        });
    }
    const onClick=(item)=>{
        const mapa=mapRef.current;
        mapa.flyTo(item.latlng,18,{
            duration:2
        });
    }
    const handleClick=(event)=>{
        console.log(event.latlng);
    }   
    // const handleSharePositionRedirect=()=>{
    //     window.location.href="/Share";
    // }
    // const handleViewPositionRedirect=()=>{
    //     window.location.href="/See3D";
    // }
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin="" />
            </Head>

            {/* BUSCADOR */}
            <div className={styles.container2}>
                <Select className={styles.buscador}  options={data} onChange={cambiar} placeholder='Buscar'/>
                {/* <button className={styles.button} onClick={handleSharePositionRedirect}><strong>NEW! </strong>Compratir ubicacion</button>
                <button className={styles.button} onClick={handleViewPositionRedirect}><strong>NEW! </strong>View</button> */}
            </div> 

            {/* MAPA */}        
            <div className={styles.container}>
                <MapContainer ref={mapRef} center={cord} zoom={11} zoomControl={false} onClick={handleClick}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <ZoomControl position='bottomleft'/>
                    {data.map((item) => (
                        <Marker key={item.id} position={item.value} icon={icono(item.type)} eventHandlers={{ click: onClick }}>
                            <Popup>
                                {item.label} <br/>
                                {item.desc} <br/>
                                {item.direccion}<br/>
                                <Link href={`/Edificio/${item.id}`}><button type='button' className={styles.button}>Ir a</button></Link>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
            <Ley content={{tipo: "gen"}}/>
        </>
    )
}

export default Mapa