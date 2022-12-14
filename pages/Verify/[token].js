import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const VerificationPage=()=>{
    const router=useRouter();
    const token=router.query.token;
    const [data,setData]=useState("Validando token....");
    const getData=async()=>{
        const response=await axios.post("https://auth-server-express-production.up.railway.app/api/token/verifyToken",{jwt:token});
        setData(response.data.status);
    }
    useEffect(()=>{
        getData();
    })
    return(
        <>
            <div className="container3">
                <h1>Given token: {token}, server response: {data}</h1>
            </div>
        </>
    )
}

export default VerificationPage;