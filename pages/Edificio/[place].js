import React, { useState } from 'react'
import { Pagination, Snackbar } from '@mui/material'
import { useRouter } from 'next/router'
import Carousel from '../../components/Carousel'
import styles from '../../styles/Edificio.module.scss'

const data = [
    { label: "PB", sr: "/Espacios/Aul_PlantaBaja.svg" },
    { label: "P1", sr: "/Espacios/Aul_Piso1.svg" },
    { label: "P2", sr: "/Espacios/Aul_Piso2.svg" },
    { label: "P3", sr: "/Espacios/Aul_Piso3.svg" }
]

const Edificio = () => {

    const router = useRouter()
    const { place } = router.query

    const [change, setChange] = useState(1)
    const dat = data[change - 1];
    const nDat = data.length;

    const arrowsAcction = (event, value) => {
        setChange(value)
    }

    return (
        <>
            <div className={styles.container}>
                {place}
            </div>

            <Carousel content={dat} />
            <Snackbar open anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }} className={styles.sna}>
                <div className={styles.arrows}>
                    <Pagination count={nDat} page={change} onChange={arrowsAcction} />
                </div>
            </Snackbar>
        </>
    )
}

export default Edificio