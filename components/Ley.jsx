import React, { useState } from 'react'
import Modal from '../components/Modal'
import styles from '../styles/Leyenda.module.scss'

const Ley = () => {

    const [showModal, setShowModal] = useState(false)

    return (

        <>
            <button onClick={() => setShowModal(true)} className={styles.btn}>
                <img src="/int.svg" width={40} height={40} />
            </button>
            <Modal onClose={() => setShowModal(false)} show={showModal} title={"Leyenda"}>
                <div className={styles.body}>
                    <hr />
                    <p>
                        <img src="/escuela.svg" width={50} height={50} className={styles.item} />
                        Escuela
                    </p>
                    <hr />
                    <p>
                        <img src="/plaza.svg" width={50} height={50} className={styles.item} />
                        Plaza
                    </p>
                    <hr />
                </div>
            </Modal>

        </>
    )
}

export default Ley