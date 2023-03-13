import React, { useState } from 'react'
import { Pagination, Snackbar } from '@mui/material'
import { useRouter } from 'next/router'
import Carousel from '../../components/Carousel'
import Ley from '../../components/Ley'
import styles from '../../styles/Edificio.module.scss'
import Link from "next/link";
const Edificio = () => {

    const router = useRouter()
    const { place } = router.query

    const data = [
        { label: "PB", sr: `/${place}/PisoPB.svg` },
        { label: "P1", sr: `/${place}/Piso01.svg` },
        { label: "P2", sr: `/${place}/Piso02.svg` },
        { label: "P3", sr: `/${place}/Piso03.svg` },
    ]

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
            
            <Ley content={{tipo: "edi"}}/>
        </>
    )
}

export default Edificio