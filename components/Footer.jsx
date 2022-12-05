import React from 'react'
// import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

const Footer = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
            <footer className={styles.footer}>
                <div className={styles.row}>
                    <a target="_blank" href="prox.html"><i className="fa fa-facebook"></i></a>
                    <a target="_blank" href="prox.html"><i className="fa fa-instagram"></i></a>
                    <a target="_blank" href="prox.html"><i className="fa fa-twitter"></i></a>
                </div>

                <div className={styles.row}>
                    <ul>
                        <li><Link href='/Contacto'>Contactanos</Link></li>
                        <li><Link href='/Terminos'>Terminos y Condiciones</Link></li>
                    </ul>
                </div>

                <div className={styles.row}>
                    GABOW Copyright © 2022 - All rights reserved || Designed By: Moises
                </div>
            </footer>
        </>
    )
}

export default Footer