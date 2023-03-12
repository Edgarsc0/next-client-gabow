import React from 'react'
import { Image } from 'mui-image'
import styles from '../styles/Carousel.module.scss'

const Carousel = (props) => {

    const { sr } = props.content;

    return (
        <>
            <div className={styles.edi}>
                <Image src={sr} showLoading fit='scale-down' />
            </div>
        </>
    )
}

export default Carousel