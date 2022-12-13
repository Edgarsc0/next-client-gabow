import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ConsultarRuta(){
    const router=useRouter();
    const {idRuta}=router.query;
    const [idState,setIdState]=useState();
    const [userobj,setUser]=useState({});
    const [todoOK,setTodoOK]=useState(false);
    const [cords,setCords]=useState([]);
    const [rutaInfo,setRutaInfo]=useState({
        rut_origen:"Esperando informacion...",
        rut_destino:"Esperando informacion...",
        rfc_dia:"Esperando informacion...",
        rfc_mes:"Esperando informacion...",
        rfc_anno:"Esperando informacion...",
    });
    const getUser=async()=>{
        const {data}=await axios.post("/api/auth/getCookie");
        if(data.token){
            setUser(data.token);
        }else{
            //no hay una sesion abierta
            window.location.href="/Mapas";
        }
    }
    const getCords=async()=>{
        const {data}=await axios.post("/api/services/getCords",{
            id:idState
        });
        console.log(data);
    }
    const validarId=async()=>{
        const {data}=await axios.post("/api/services/validateId",{
            id:idState,
            email:userobj.email
        });
        console.log(data);
        if(data.info){
            setRutaInfo(data.info);
            setTodoOK(true);
        }else{
            //no existe en el id buscado
            console.log("no hay data.info");
            window.location.href="/Mapas";
        }
    }
    useEffect(()=>{
        setIdState(idRuta);
        if(idState && userobj.user && rutaInfo.rut_destino=="Esperando informacion..."){
            validarId();
        }
        if(!userobj.user){
            getUser();
        }
        if(todoOK && cords.length==0){
            getCords();
        }
    });
    return(
        <>
            <div className="containerIni">
                <h1>Informacion de la ruta</h1>
                <hr></hr>
                <h3>Origen: </h3><p>{rutaInfo.rut_origen}</p>
                <h3>Destino: </h3><p>{rutaInfo.rut_destino}</p>
                <h3>Ruta realizada el: </h3><p>{rutaInfo.rfc_dia}/{rutaInfo.rfc_mes}/{rutaInfo.rfc_anno}</p>
            </div>
        </>
    )
}