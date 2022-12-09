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
//escuela: 19.45371285983326, -99.17530557712774
//town center: 19.503565296138603, -99.20305358194275
const Ruta = ({visibility}) => {
    //<Marker icon={icon} position={data}></Marker>
    const mapRef = useRef();
    const [cord, setCord] = useState([19.472819274952897, -99.14333273147834])
    const [data,setData]=useState([[19.472819274952897, -99.14333273147834]]);
    const [originCords,setOriginCords]=useState();
    const [origin,setOrigin]=useState("Calculando origen...");
    const success=(position)=>{
        const mapC = mapRef.current;
        mapC.flyTo([position.coords.latitude,position.coords.longitude],18,{duration:2});
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
    const handleFinish=()=>{
        navigator.geolocation.clearWatch(idWatchPosition);
        const fecha=new Date();
        console.log(fecha.getFullYear());
        console.log(fecha.getDate());
        console.log(fecha.getMonth());
    }
    function calcularArea(px,py){
        var suma1=0;
        for(const i=0;i<px.length-1;i++){
            suma1+=px[i]*py[i+1];
        }
        var suma2=0;
        for(const i=0;i<px.length-1;i++){
            suma2+=px[i+1]*py[i];
        }
        return Math.abs(0.5*(suma1-suma2));
    }
    function isInEdifGob(array){
        const px=[-99.17532844482236,-99.17559063093498,-99.17542634570286,-99.17516483006723,-99.17532844482236];
        const py=[19.45380788954552,19.453967853726997,19.45420811638694,19.454047519898072,19.45380788954552];
        const area_poligono=calcularArea(px,py);
        const clientx=array[1];
        const clienty=array[0];
        const area_total=calcularArea([px[0],px[1],clientx,px[0]],[py[0],py[1],clienty,py[0]])+
        calcularArea([px[1],px[2],clientx,px[1]],[py[1],py[2],clienty,py[1]])+
        calcularArea([px[2],px[3],clientx,px[2]],[py[2],py[3],clienty,py[2]])+
        calcularArea([px[3],px[4],clientx,px[3]],[py[3],py[4],clienty,py[3]]);
        if(area_poligono.toFixed(10)==area_total.toFixed(10)){
            return true;
        }else{
            return false;
        }
    }
    function isInEdifAulas(array){
        const px=[-99.17544652013044,-99.17595448028152,-99.17569611465676,-99.17518177457127,-99.17544652013044];
        const py=[19.453207518417145,19.453519557636113,19.45389325323486,19.453584221305192,19.453207518417145];
        const area_poligono=calcularArea(px,py);
        const clientx=array[1];
        const clienty=array[0];
        const area_total=calcularArea([px[0],px[1],clientx,px[0]],[py[0],py[1],clienty,py[0]])+
        calcularArea([px[1],px[2],clientx,px[1]],[py[1],py[2],clienty,py[1]])+
        calcularArea([px[2],px[3],clientx,px[2]],[py[2],py[3],clienty,py[2]])+
        calcularArea([px[3],px[4],clientx,px[3]],[py[3],py[4],clienty,py[3]]);
        if(area_poligono.toFixed(10)==area_total.toFixed(10)){
            return true;
        }else{
            return false;
        }
    }
    function isInEscuela(array){
        const px=[-99.17541532539201,-99.17512231414875,-99.17461031579097,-99.17521735036371,-99.17602737788347,-99.17541532539201];
        const py=[19.454336741401818,19.454072754761494,19.453320275824684,19.45287151199291,19.453431073536365,19.454336741401818];      
        const clientx=array[1];
        const clienty=array[0];
        const area_poligono=calcularArea(px,py);
        var area_total=calcularArea([px[0],px[1],clientx,px[0]],[py[0],py[1],clienty,py[0]])+
        calcularArea([px[1],px[2],clientx,px[1]],[py[1],py[2],clienty,py[1]])+
        calcularArea([px[2],px[3],clientx,px[2]],[py[2],py[3],clienty,py[2]])+
        calcularArea([px[3],px[4],clientx,px[3]],[py[3],py[4],clienty,py[3]])+
        calcularArea([px[4],px[5],clientx,px[4]],[py[4],py[5],clienty,py[4]]);
        if(area_poligono.toFixed(10)==area_total.toFixed(10)){
            return true;
        }else{
            return false;
        }
    }
    useEffect(()=>{
        globalThis.idWatchPosition=navigator.geolocation.watchPosition(success,error,options);
        console.log(data);
        if(originCords && origin=="Calculando origen..."){
            if(isInEscuela(data[1])){
                if(isInEdifAulas(data[1])){
                    setOrigin("EdifAulas");                    
                }else{
                    if(isInEdifGob(data[1])){
                        setOrigin("EdifGob");
                    }else{
                        setOrigin("AreaComun");
                    }
                }
            }else{
                setOrigin("Externo");
            }
        }
        if(data.length==2){
            setOriginCords(data[1]);
        }
    });

    if(visibility){
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
                <div className={styles.container3}>
                    <h1>Origen: {origin}</h1>
                </div>
                <div className={styles.container3} id="recorrido">
                    <MapContainer ref={mapRef} center={cord} zoom={20}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />                    
                        <Marker position={data[data.length-1]} icon={icon}/>
                    </MapContainer>
                </div>
                <div className={styles.container3}><button type="button" onClick={handleFinish} className={styles.button}>Finalizar Ruta</button></div>
            </>
        )
    }
}

export default Ruta