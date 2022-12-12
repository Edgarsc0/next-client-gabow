import React from 'react'
import Link from 'next/link'
import styles from '../styles/Menu.module.scss'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Menu = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://next-client-gabow.vercel.app/api/auth/getCookie")
        .then(res=>res.json())
        .then(data=>setData(data))
    },[]);
    const redirect=()=>{
        window.location.href="/";
    }
    console.log(data);
    if(data.cookie!=undefined){
        return (
            <>
                <nav className={styles.container} id="nav">
                    <h2 className={`${styles.navLogo}`} onClick={redirect}>GABOW</h2>
                    <ul className={styles.navLinks} >
                        {/* <li className={styles.navItem}>
                            <Link href="/">
                                <a className={styles.navLink}>Inicio</a>
                            </Link>
                        </li> */}
                        <li className={styles.navItem}>
                            <Link href="/Mapas">
                                <a className={styles.navLink}>Mapas</a>
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/MisRutas">
                                <a className={styles.navLink}>Mis Rutas</a>
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/Favoritos">
                                <a className={styles.navLink}>Favoritos</a>
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href='/Datos'>
                                <a className={styles.navLink}>Perfil</a>
                            </Link>
                        </li>
                    </ul>
                    <a href="#nav" className={styles.navHam}>
                        <img src="/menu.svg" className={styles.navIcon} />
                    </a>
                    <a href="#" className={styles.navClose}>
                        <img src="/close.svg" className={styles.navIcon} />
                    </a>
                </nav>
            </>
        )
    }else{
        return (
            <>
                <nav className={styles.container} id="nav">
                    <h2 className={`${styles.navLogo}`} onClick={redirect}>GABOW</h2>
                    <ul className={styles.navLinks} >
                        <li className={styles.navItem}>
                            <Link href="/Mapas">
                                <a className={styles.navLink}>Mapas</a>
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href='/Registro'>
                                <a className={styles.navLink}>Iniciar Sesion</a>
                            </Link>
                        </li>
                    </ul>
                    <a href="#nav" className={styles.navHam}>
                        <img src="/menu.svg" className={styles.navIcon} />
                    </a>
                    <a href="#" className={styles.navClose}>
                        <img src="/close.svg" className={styles.navIcon} />
                    </a>
                </nav>
            </>
        )
    }
}

export default Menu;