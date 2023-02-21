import React, { useState } from 'react'
// import Modal from '../components/Modal'
import styles from '../styles/Leyenda.module.scss'

import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

import info2 from './info2'

const Ley = () => {

    // const [showModal, setShowModal] = useState(false)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (

        <>
            {/* <button onClick={() => setShowModal(true)} className={styles.btn}>
                <img src="/int.svg" width={40} height={40} />
            </button> */}
            {/* <Modal onClose={() => setShowModal(false)} show={showModal} title={"Leyenda"}>
                <div className={styles.body}>
                    <hr />
                    <p>
                        <img src="/escuela.svg" width={50} height={50} className={styles.item} />
                        Escuela
                    </p>
                    <hr />
                    <p>
                        <img src="/plaza.svg" width={50} height={50} className={styles.item} />
                        Plaza
                    </p>
                    <hr />
                </div>
            </Modal> */}

            <button onClick={handleOpen} className={styles.btn}>
                <img src="/int.svg" width={40} height={40} />
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={styles.mo}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className={styles.text}>
                        Leyenda
                    </Typography>
                    {/* <Typography id="modal-modal-description" sx={{ mt: 2 }} className={styles.text}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
                    <div className={styles.body}>
                        <hr />
                        <p>
                            <img src="/escuela.svg" width={50} height={50} className={styles.item} />
                            Escuela
                        </p>
                        <hr />
                        <p>
                            <img src="/plaza.svg" width={50} height={50} className={styles.item} />
                            Plaza
                        </p>
                        <hr />
                    </div>

                    <info2/>

                </Box>
            </Modal>

        </>
    )
}

export default Ley