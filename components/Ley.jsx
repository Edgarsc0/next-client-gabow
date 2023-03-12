import React, { useState } from 'react'
import { Box, IconButton, Typography, Modal, Snackbar  } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import styles from '../styles/Leyenda.module.scss'

const Ley = () => {

    const [open, setOpen] = useState(false);

    return (

        <>
            <Snackbar className={styles.container} open anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}>
                <IconButton onClick={() => setOpen(true)}>
                    <HelpOutlineIcon className={styles.prueba}/>
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
                </Box>
            </Modal>
        </>
    )
}

export default Ley