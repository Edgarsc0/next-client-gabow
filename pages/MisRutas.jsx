import { useState } from 'react';
import styles from '../styles/Mapas.module.scss'
export default function MisRutas(){
    const [cords,setCords]=useState([]);
    return(
        <>
            <div className={styles.container3}>
                <h1>Mis Rutas</h1>
            </div>
            <hr></hr>

        </>
    )
}