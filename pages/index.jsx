import React, { useState, useRef } from 'react'
import Head from 'next/head'
import dynamic from "next/dynamic"
import Modal from '../components/Modal'
import styles from '../styles/Leyenda.module.scss'

const MyAwesomeMap = dynamic(() => import("../components/Mapa"), { ssr: false })

const index = () => {

    const [showModal, setShowModal] = useState(true)

    return (
        <>
            <Head>
                <title>GABOW</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MyAwesomeMap />

            {/* <button onClick={() => setShowModal2(true)} className='btn'>2</button> */}
            <Modal onClose={() => setShowModal(false)} show={showModal} title={"Bienvenido a GABOW"}>
                <div className={styles.welcome}></div>
            </Modal>
        </>
    )
}

export default index