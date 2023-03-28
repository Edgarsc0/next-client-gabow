import React, { useState } from 'react'
import { Box, IconButton, Typography, Modal, Snackbar } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import styles from '../styles/Leyenda.module.scss'

const Ley = (props) => {

    const { tipo } = props.content;

    const [open, setOpen] = useState(false);

    if (tipo == "gen") {
        return (

            <>
                <Snackbar className={styles.container} open anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                    <IconButton onClick={() => setOpen(true)}>
                        <HelpOutlineIcon className={styles.prueba} />
                    </IconButton>
                </Snackbar>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <Box className={styles.mo}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" className={styles.text}>
                            Leyenda
                        </Typography>
                        <div className={styles.body}>
                            <hr className={styles.di}/>
                            <p>
                                <img src="/icons/escuela.png" width={50} height={50} className={styles.item} />
                                Escuela
                            </p>
                            <hr className={styles.di}/>
                            <p>
                                <img src="/icons/plaza.png" width={50} height={50} className={styles.item} />
                                Plaza
                            </p>
                            <hr className={styles.di}/>
                        </div>
                    </Box>
                </Modal>
            </>
        )
    } else {
        return (

            <>
                <Snackbar className={styles.container} open anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                    <IconButton onClick={() => setOpen(true)}>
                        <HelpOutlineIcon className={styles.prueba} />
                    </IconButton>
                </Snackbar>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <Box className={styles.mo}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" className={styles.text}>
                            Leyenda
                        </Typography>
                        <div className={styles.body}>
                            <hr className={styles.di}/>
                            <p>
                                <img src="/sen/extintor.png" width={25} height={25} className={styles.item2} />
                                Extintor
                            </p>
                            <hr className={styles.di}/>
                            <p>
                                <img src="/sen/punto.png" width={25} height={25} className={styles.item2} />
                                Punto de encuentro
                            </p>
                            <hr className={styles.di}/>
                            <p>
                                <img src="/sen/salida.png" width={25} height={25} className={styles.item2} />
                                Salida de emergencia
                            </p>
                            <hr className={styles.di}/>
                            <p>
                                <img src="/sen/elevar.png" width={25} height={25} className={styles.item2} />
                                Elevador
                            </p>
                            <hr className={styles.di}/>
                            <p>
                                <img src="/sen/public.png" width={25} height={25} className={styles.item2} />
                                Baños
                            </p>
                            <hr className={styles.di}/>
                            <p>
                                <img src="/sen/escaleraUp.png" width={25} height={25} className={styles.item2} />
                                Escaleras (Subida)
                            </p>
                            <hr className={styles.di}/>
                            <p>
                                <img src="/sen/escaleraDo.png" width={25} height={25} className={styles.item2} />
                                Escaleras (Bajada)
                            </p>
                            <hr className={styles.di}/>
                        </div>
                    </Box>
                </Modal>
            </>
        )
    }

}

export default Ley