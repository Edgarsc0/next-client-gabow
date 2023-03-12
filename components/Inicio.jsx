import React, { useState } from 'react'
import { IconButton, Snackbar, Modal, Box, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AuthGoogleButton from './AuthGoogleButton';
import styles from '../styles/Inicio.module.scss'

const Inicio = () => {

    const [open, setOpen] = useState(false)

    return (

        <>
            <Snackbar open anchorOrigin={{ horizontal: 'right', vertical: 'top' }} className={styles.container}>
                <IconButton onClick={() => setOpen(true)}>
                    <AccountCircleIcon className={styles.icon} />
                </IconButton>
            </Snackbar>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box className={styles.mo}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className={styles.text}>
                        Aqui va el Inicio/Registro
                        <AuthGoogleButton/>
                    </Typography>
                </Box>
            </Modal>
        </>

    )
}

export default Inicio