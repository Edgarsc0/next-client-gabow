import React, { useState, useRef } from 'react'
import Head from 'next/head'
import dynamic from "next/dynamic"

const MyAwesomeMap = dynamic(() => import("../components/Mapa"), { ssr: false })

const Index = () => {

    const [showModal, setShowModal] = useState(true)

    return (
        <>
            <Head>
                <title>GABOW</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MyAwesomeMap />
        </>
    )
}

export default Index