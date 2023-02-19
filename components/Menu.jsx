import React from 'react'
// import Link from 'next/link'
import styles from '../styles/Menu.module.scss'
import Info from './Info'
import Inicio from './Inicio'
import Ley from './Ley'

const Menu = () => {
    return (
        <>
            <div className={styles.p1}>

                <div className={styles.p2}>

                    {/* COMPONENTE INFO */}
                    <Info/>

                </div>

                <div className={styles.p3}>

                    {/* CREAR COMPONENTE DE INICIAR SESION CON UN MODAL */}
                    {/* <button className={styles.btn}>Iniciar sesion</button> */}
                    <Inicio/>
                    
                    {/* CREAR COMPONENTE DEL TUTORIAL CON UN MODAL */}
                    {/* <button className={styles.btn}>
                        <img src="/int.svg" width={40} height={40} />
                    </button> */}
                    <Ley/>
                </div>

            </div>
        </>
    )
}

export default Menu;