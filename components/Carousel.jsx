import React from 'react'
import styles from '../styles/Carousel.module.scss'

const Carousel = (props) => {

    const { sr } = props.content;

    return (
        <>
            <div className={styles.edi}>
                <img src={sr} className={styles.edi2}/>
            </div>
        </>
    )
}

export default Carousel