import React, { useState } from 'react'
import { Drawer, Box, Typography, IconButton, Grid } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../styles/Info.module.scss'

const Info = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <div className={styles.cont}>
            <Grid container spacing={2}>
                <Grid item>
                    <IconButton variant='contained' className={styles.icon} onClick={() => setIsOpen(true)}>
                        <MenuIcon className={styles.icon}/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <div className={styles.cont}>
                        <h2 className={styles.logo}>GABOW</h2>
                    </div>
                </Grid>
            </Grid>
        </div>
            <Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
                <Box className={styles.box}>
                    <Typography variant='h6' role='presentation'>
                        Mensaje de prueba
                    </Typography>
                </Box>
            </Drawer>
        </>
    )
}

export default Info