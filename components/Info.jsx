import React from 'react'
import Link from 'next/link'
import styles from '../styles/Info.module.scss'

const Info = () => {
    return (
        <nav className={styles.container} id="nav">

            {/* ICONOS ABRIR/CERRAR */}
            <a href="#nav" className={styles.navHam}>
                <img src="/menu.svg" className={styles.navIcon} />
            </a>
            <a href="#" className={styles.navClose}>
                <img src="/close.svg" className={styles.navIcon} />
            </a>

            {/* LOGO */}
            <h2 className={styles.navLogo}>GABOW</h2>

            {/* CONTENIDO */}
            <div className={styles.navLinks}>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
                <div className={styles.navLink}>MENSAJE DE PRUEBA</div>
            </div>
            {/* <ul className={styles.navLinks} >
                <li className={styles.navItem}>
                    <Link href="/">
                        <a className={styles.navLink}>Inicio</a>
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/Mapas">
                        <a className={styles.navLink}>Mapas</a>
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/Favoritos">
                        <a className={styles.navLink}>Favoritos</a>
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href='/Registro'>
                        <a className={styles.navLink}>Iniciar Sesion</a>
                    </Link>
                </li>
            </ul> */}
        </nav>
    )
}

export default Info