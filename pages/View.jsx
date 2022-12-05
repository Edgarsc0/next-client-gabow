import React from 'react'
import Head from 'next/head'
import dynamic from "next/dynamic"
// import Mapa from '../components/Mapa'

const MyAwesomeMap = dynamic(() => import("../components/MapaViewLocation"), { ssr:false })
const View=()=>{
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

export default View;