import React from 'react'
import styles from '../styles/Animacion.module.scss'

const Animacion = () => {
  return (
    <div className={styles.animcaion}>
        <div className={styles.bg}></div>
        <div className={`${styles.bg} ${styles.bg2}`}></div>
        <div className={`${styles.bg} ${styles.bg3}`}></div>
    </div>
  )
}

export default Animacion