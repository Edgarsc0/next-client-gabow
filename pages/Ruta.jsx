import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Ruta.module.scss'

const Ruta = () => {
    return (
        <>
            <Head>
                <title>GABOW</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.ruta}>
                    <div>
                        <br />
                        <h1>Ruta:</h1>
                        <h1>Cinepolis</h1>
                        <br />
                        <div>Origen: Primer piso</div>
                        <div>Lugar: Town Center El Rosario</div>
                        <br />
                        <Link href="/Edificio"><button type="button" className={styles.button}>Modificar Destino</button></Link>
                        <Link href="/Mapas"><button type="button" className={styles.button}>Finalizar Ruta</button></Link>
                    </div>
                    <div>
                        <br />
                        <h2>Instrucciones</h2>
                        <p><i>EN DESARROLLO....</i></p>
                        <div>Continua Derecho</div>
                        <div>Gira a la derecha</div>
                        <div>Avanza 100m</div>
                    </div>
                    <div></div>
                    <br />
                </div>
            </div>
        </>
    );
}
export default Ruta;