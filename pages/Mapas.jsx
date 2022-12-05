import React from 'react'
import Head from 'next/head'
import dynamic from "next/dynamic"
// import Mapa from '../components/Mapa'

const MyAwesomeMap = dynamic(() => import("../components/Mapa"), { ssr:false })

const Mapas = () => {
    return (
        <>
            <Head>
                <title>GABOW</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MyAwesomeMap/>
            {/* <Mapa/> */}
        </>
    )
}

export default Mapas