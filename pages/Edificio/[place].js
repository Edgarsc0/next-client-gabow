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
        { label: "PBv2", sr: `/${place}/PB.jpg` },
        { label: "P3v2", sr: `/${place}/P03.jpg` },
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
            <Snackbar open anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }} className={styles.sna}>
                <div className={styles.arrows}>
                    <Pagination count={nDat} page={change} onChange={arrowsAcction} siblingCount={0}/>
                </div>
            </Snackbar>
            
            <Ley content={{tipo: "edi"}}/>
        </>
    )
}

export default Edificio