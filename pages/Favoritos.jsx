import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Favoritos.module.scss'
import Script from 'next/script'

const Favoritos = () => {
    return (
        <>
            {/* <Head>
            </Head> */}
            <Script src="https://cdn.lordicon.com/pzdvqjsp.js"></Script>
            <div className={styles.container}>
                <table className={styles.tabla}>
                    <tbody>
                        <tr>
                            <td className={styles.celda}>Town Center</td>
                            <td className={styles.celda}>Cinepolis</td>
                            <td className={styles.celda}>
                                <Link href="/Ruta"><button type="button" className={styles.button}>Iniciar ruta</button></Link>
                                <button type="button" className={styles.button}><lord-icon src="https://cdn.lordicon.com/kfzfxczd.json" trigger="hover" colors="primary:#ffffff" width="32px" height="32px"></lord-icon></button>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.celda}>Town Center</td>
                            <td className={styles.celda}>Walmart</td>
                            <td className={styles.celda}>
                                <Link href="/Ruta"><button type="button" className={styles.button}>Iniciar ruta</button></Link>
                                <button type="button" className={styles.button}><lord-icon src="https://cdn.lordicon.com/kfzfxczd.json" trigger="hover" colors="primary:#ffffff" width="32px" height="32px"></lord-icon></button>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.celda}>CECyT 9</td>
                            <td className={styles.celda}>Aula 4.0</td>
                            <td className={styles.celda}>
                                <Link href="/Ruta"><button type="button" className={styles.button}>Iniciar ruta</button></Link>
                                <button type="button" className={styles.button}><lord-icon src="https://cdn.lordicon.com/kfzfxczd.json" trigger="hover" colors="primary:#ffffff" width="32px" height="32px"></lord-icon></button>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.celda}>CECyT 9</td>
                            <td className={styles.celda}>Salon 13</td>
                            <td className={styles.celda}>
                                <Link href="/Ruta"><button type="button" className={styles.button}>Iniciar ruta</button></Link>
                                <button type="button" className={styles.button}><lord-icon src="https://cdn.lordicon.com/kfzfxczd.json" trigger="hover" colors="primary:#ffffff" width="32px" height="32px"></lord-icon></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Favoritos