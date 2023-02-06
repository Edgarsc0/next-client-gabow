import React , {useState} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Registro.module.scss'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import io from "socket.io-client";

const Registro = () => {
    const redirigir=()=>{
        window.location.href="/Mapas";
    }

    const [validate,setValidate] = useState(false);

    const handleVerify =()=>{

        if(validate){

            setValidate(false);

        }
        else{

            setValidate(true);

        }


    }

    const handleRegister=async(e)=>{
        e.preventDefault();
        if(validate){

            const socket=io("https://auth-server-express-production.up.railway.app/");
            const response=await axios.post("/api/auth/sendEmail",{
                email:e.target.email.value,
                user:e.target.user.value,
                pswd:e.target.pswd.value,
            });
            const {error}=response.data;
            if(!error){
                toast.success(`Email enviado a ${e.target.email.value}! Revisa tu bandeja de entrada.`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                socket.on("redirect",async({jwt})=>{
                    const responseRegister=await axios.post("https://auth-server-express-production.up.railway.app/api/auth/register",{webToken:jwt});
                    if(responseRegister.data.status=="User registered"){
                        document.getElementById("Registerform").reset();
                        toast.success(`Registro exitoso! Porfavor, inicie sesion.`, {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    }else{
                        toast.error('Ups! Algo fallo al intentar registrar las credenciales. Intentalo de nuevo mas tarde. ', {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    }
                    socket.disconnect();
                });
            }else{
                toast.error('Ups! Algo fallo. Revisa que el correo electronico este bien escrito y de preferencia que sea Gmail.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }

        }
        else{

            toast.error('Primero tienes que aceptar los terminos y condiciones', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

        }
    }
    const handleLogin=async(e)=>{
        e.preventDefault();
        const response=await axios.post("https://auth-server-express-production.up.railway.app/api/auth/login",{
            email:e.target.email.value,
            password:e.target.pswd.value,
        });
        const {status,token,error}=response.data;
        console.log(status);
        if(error){
            console.log(error);
        }
        if(status=="Error User not found"){
            toast.error('Ups! No pudimos encontrar el usuario ingresado. Intentalo de nuevo.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }if(status=="Wrong Password"){
            toast.error('Ups! Contraseña Incorrecta', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }if(status=="Ok"){
            document.cookie=`params=${token}`;
            redirigir();
        }
    }



    return (
        <>
            <Head>
                <title>GABOW</title>
                <link rel="icon" href="/favicon.ico" />
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
                theme="colored"
            />
            <div className={styles.container}>
                <div className={styles.main}>
                    <input type="checkbox" id={styles.chk} aria-hidden="true" />
                    <div className={styles.signup}>
                        <form onSubmit={handleRegister} id="Registerform">
                            <label htmlFor={styles.chk} aria-hidden="true" className={styles.label}>Registrarse</label>
                            <input type="text" name="user" placeholder="Usuario" required="" className={styles.input} />
                            <input type="email" name="email" placeholder="Correo" required="" className={styles.input} />
                            <input type="password" name="pswd" placeholder="Contraseña" required="" className={styles.input} />
                            <label className={styles.ter}><input onClick={handleVerify} type="checkbox"/>Acepto</label>
                            <Link href='/Terminos'><a className={styles.ter}>Terminos y Condiciones</a></Link>
                            <button className={styles.button}>Registrarse</button>
                        </form>
                    </div>
                    <div className={styles.login}>
                        <form onSubmit={handleLogin}>
                            <label htmlFor={styles.chk} aria-hidden="true" className={styles.label}>Iniciar Sesion</label>
                            <input type="email" name="email" placeholder="Correo" required="" className={styles.input} />
                            <input type="password" name="pswd" placeholder="Contraseña" required="" className={styles.input} />
                            <button className={styles.button}>Iniciar Sesion</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Registro;