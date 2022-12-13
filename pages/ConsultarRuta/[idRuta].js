import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ConsultarRuta(){
    const router=useRouter();
    const {idRuta}=router.query;
    const [idState,setIdState]=useState();
    const [userobj,setUser]=useState({});
    const getUser=async()=>{
        const {data}=await axios.post("/api/auth/getCookie");
        setUser(data.token);
    }
    const validarId=async()=>{
        const {data}=await axios.post("/api/services/validateId",{
            id:idState,
            email:userobj.email
        });
        console.log(data);
    }
    useEffect(()=>{
        setIdState(idRuta);
        if(idState){
            validarId();
        }
        if(!userobj.user){
            getUser();
        }
    });
    return(
        <>
            <h1>hola</h1>
        </>
    )
}