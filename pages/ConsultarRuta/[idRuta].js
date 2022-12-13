import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ConsultarRuta(){
    const router=useRouter();
    const {idRuta}=router.query;
    const [idState,setIdState]=useState();
    const [userobj,setUser]=useState({});
    const [rutaInfo,setRutaInfo]=useState({
        rut_destino:"Esperando informacion..."
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
    const validarId=async()=>{
        const {data}=await axios.post("/api/services/validateId",{
            id:idState,
            email:userobj.email
        });
        console.log(data);
        if(data.info){
            setRutaInfo(data.info);
        }else{
            //no existe en el id buscado
            console.log("no hay data.info");
        }
    }
    useEffect(()=>{
        setIdState(idRuta);
        if(idState && userobj.user){
            validarId();
        }
        if(!userobj.user){
            getUser();
        }
    });
    return(
        <>
            <h1>hola</h1>
            <h1>Destino: {rutaInfo.rut_destino}</h1>
        </>
    )
}