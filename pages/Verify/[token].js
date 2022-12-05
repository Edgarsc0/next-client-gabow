import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const VerificationPage=()=>{
    const router=useRouter();
    const token=router.query.token;
    const [data,setData]=useState("Validando token....");
    const getData=async()=>{
        const response=await axios.post("http://localhost:8000/api/token/verifyToken",{jwt:token});
        setData(response.data.status);
    }
    useEffect(()=>{
        getData();
    })
    return(
        <>
            <h1>Given token: {token}, server response: {data}</h1>
        </>
    )
}

export default VerificationPage;