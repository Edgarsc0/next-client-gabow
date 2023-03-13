import React, { useState } from 'react'
import { TextField, IconButton, Snackbar, Modal, Box, Typography, Button, Link, FormControl, InputLabel, OutlinedInput, InputAdornment, Grid } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import styles from '../styles/Inicio.module.scss'

import { Visibility, VisibilityOff } from '@mui/icons-material';

import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    email: yup
        .string('Ingresa un correo')
        .email('Ingresa un correo valido')
        .required('Es requerido un correo'),
    password: yup
        .string('Ingresa una contraseña')
        .min(8, 'La contraseña debe de tener minimo 8 caracteres')
        .required('Es requerido una contraseña'),
    user: yup
        .string('Ingresa un nombre de usuario')
        .min(8, 'El usuario debe de tener minimo 8 caracteres')
        .required('Es requerido un nombre de usuario'),
});

const Inicio = () => {

    const [open, setOpen] = useState(false)
    const [change, setChange] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    
    const [showError, setShowError] = useState("");    

    const reset = () => {
        setOpen(false);
        setChange(false);
    }

    const endAdornment = {
        endAdornment: (
            <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} className={styles.eye}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        )
    };

    const formik = useFormik({
        initialValues: {
            user: "",
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        // AQUI MANDA LOS DATOS DEL FORMS
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <Snackbar open anchorOrigin={{ horizontal: 'right', vertical: 'top' }} className={styles.container}>
                <IconButton onClick={() => setOpen(true)}>
                    <AccountCircleIcon className={styles.icon} />
                </IconButton>
            </Snackbar>
            <Modal open={open} onClose={reset}>
                <Box className={styles.mo} sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1} columns={1}>
                        <Grid item xs={1}>
                            {change ?
                                <form onSubmit={formik.handleSubmit}>
                                    <Grid container spacing={1} columns={1}>
                                        <Grid item xs={1}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2" className={styles.text}>
                                                Crear cuenta
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <TextField
                                                className={styles.input}
                                                label="Usuario"
                                                variant="outlined"
                                                
                                                id="user"
                                                name="user"
                                                // value={formik.values.user}
                                                onChange={formik.handleChange}
                                                error={formik.touched.user && Boolean(formik.errors.user)}
                                                helperText={formik.touched.user && <i className={styles.error}>{formik.errors.user}</i>}
                                            />
                                        </Grid>
                                        <Grid item xs={1}>
                                            <TextField
                                                className={styles.input}
                                                variant="outlined"
                                                label="Correo"

                                                id="email"
                                                name="email"
                                                // value={formik.values.email}
                                                onChange={formik.handleChange}
                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                helperText={formik.touched.email && <i className={styles.error}>{formik.errors.email}</i>}
                                            />
                                        </Grid>
                                        <Grid item xs={1}>
                                            <TextField
                                                className={styles.input}
                                                variant="outlined"
                                                type={showPassword ? 'text' : 'password'}
                                                label="Contraseña"
                                                InputProps={endAdornment}

                                                id="password"
                                                name="password"
                                                // value={formik.values.password}
                                                onChange={formik.handleChange}
                                                error={formik.touched.password && Boolean(formik.errors.password)}
                                                helperText={formik.touched.password && <i className={styles.error}>{formik.errors.password}</i>}
                                            />
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Button variant="contained" type="submit">Registrarse</Button>
                                        </Grid>
                                    </Grid>
                                </form>

                                :

                                <form action="">
                                    <Grid container spacing={1} columns={1}>
                                        <Grid item xs={1}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2" className={styles.text}>
                                                Inicio de sesion
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <TextField
                                                className={styles.input}
                                                variant="outlined"
                                                type="email"
                                                label="Correo"
                                            />
                                        </Grid>
                                        <Grid item xs={1}>
                                            <TextField
                                                className={styles.input}
                                                variant="outlined"
                                                type={showPassword ? 'text' : 'password'}
                                                label="Contraseña"
                                                InputProps={endAdornment}
                                            />
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Button variant="contained">Iniciar sesion</Button>
                                        </Grid>
                                        <Grid tiem xs={1}>
                                        </Grid>
                                    </Grid>
                                </form>
                            }
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="body2">{change ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}</Typography>
                            <Link className={styles.link} component="button" variant="body2" onClick={() => setChange(!change)}>{change ? "Inicia sesion" : "Registrate"}</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}

export default Inicio