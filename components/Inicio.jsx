import React, { useState } from 'react'
import Modal from './Modal';
import styles from '../styles/Inicio.module.scss'

const Inicio = () => {

    const [showModal, setShowModal] = useState(false)

    return (

        <>
            <button onClick={() => setShowModal(true)} className={styles.btn}>Iniciar sesion</button>

            <Modal onClose={() => setShowModal(false)} show={showModal} title={"Bienvenido a GABOW"}>
                <div>
                    AQUI VA EL INICIO/REGISTRO
                </div>
            </Modal>
        </>

    )
}

export default Inicio