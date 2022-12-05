import React from "react";
import ReactDom from "react-dom/client";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import dynamic from "next/dynamic"
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/Mapas.module.scss'
import { useState } from "react";
const MyAwesomeMap = dynamic(() => import("../components/MapaShareLocation"), { ssr:false });
const Share=()=>{
    const [visibility,setVisibility]=useState(false);
    const [destinatarios,setDestinatarios]=useState([]);
    const agregarCampo=()=>{
        const div=document.getElementById("inputForm");
        //div.innerHTML+="<div name='email'><input></input></div>";
        const divInput=document.createElement("DIV");
        divInput.setAttribute("name","divEmail");
        divInput.innerHTML=`<input name="email"></input>`;
        div.appendChild(divInput);
        console.log("hola")
    }
    const enviarCorreos=async()=>{
        const inputs=document.getElementsByName("email");
        let correos=[];
        inputs.forEach(item=>{
            correos.push(item.value);
        });
        const response=await axios.post("/api/services/sendUbication",{emails:correos});
        console.log(response);
        const {status}=response.data;
        if(status=="Invalid Session"){
            //se modifico la cookie
            toast.error('Ups! La sesion no es valida. Prueba volver a iniciar sesion. ', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setTimeout(()=>{
                window.location.reload();
            },3500);
        }if(status=="Bad Email sent"){
            //no se pudo enviar un correo
            
        }if(status=="emails sent"){
            /*const root=ReactDom.createRoot(document.getElementById("formEmails"));
            root.render(<MyAwesomeMap/>);*/
            toast.success('Ubicacion compartida!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            document.getElementById("formEmails").innerHTML="";
            setVisibility(true);
            setDestinatarios(correos);
        }
    }
    const removerCampo=()=>{
        const div=document.getElementById("inputForm");
        const inputs=document.getElementsByName("divEmail");
        if(inputs.length!=0){
            div.removeChild(inputs[inputs.length-1]);
        }
    }
    return(
        <>  
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
            <div id="formEmails">
                <h1>Compartir Ubicacion en tiempo real</h1>
                <hr></hr>
                <h1><i>Share</i> esta en una fase de Pruebas. Procura tener siempre abierta esta pagina.</h1>
                <p>Selecciona los destinatarios</p>            
                <h1>Introduce el coreo de los destinatarios</h1>
                <input name="email"></input><button onClick={agregarCampo}>+</button><button onClick={removerCampo}>-</button><br/>
                <div id="inputForm"></div>
                <button onClick={enviarCorreos}>Empezar a compartir Ubicación</button>
            </div>
            <div id="map">
                <MyAwesomeMap visibility={visibility} dest={destinatarios}/>
            </div>       
        </>
    )
}
export default Share;