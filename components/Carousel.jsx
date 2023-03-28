import React, { useState, useEffect } from 'react'
import styles from '../styles/Carousel.module.scss'
import Info from './Info'

const Carousel = ({ sr, sv, place }) => {

    const [openInfo, setOpenInfo] = useState(false);
    const [room, setRoom] = useState("");
    const [svgCode, setSvgCode] = useState('');

    useEffect(() => {
        fetch(`/${place}/${sv}.svg`)
            .then(response => response.text())
            .then(data => setSvgCode(data));
    }, [sv]);

    const closeInfo = () => {
        setOpenInfo(false);
    }

    const handleClick = (event) => {
        const clickedElement = event.target;
        if (clickedElement.classList.contains('lim')) {
            document.querySelectorAll('.lim').forEach(element => { element.setAttribute('opacity', '0') });
            const iden = event.target.id;
            setRoom(iden);
            console.log(iden);
            event.currentTarget.querySelector(`#${iden}`).setAttribute('opacity', '.7');
            event.currentTarget.querySelector(`#${iden}`).setAttribute('fill', '#66c0f4');
            setOpenInfo(true);
        }else{
            document.querySelectorAll('.lim').forEach(element => { element.setAttribute('opacity', '0') });
        }
    };

    return (
        <>
            <div className={styles.edi} >
                <img src={sr} className={styles.edi2} />
                <div dangerouslySetInnerHTML={{ __html: svgCode }} className={styles.edi3} onClick={handleClick} />
            </div>

            <Info openInfo={openInfo} closeInfo={closeInfo} room={room}/>
        </>
    )
}

export default Carousel