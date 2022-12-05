import React from 'react'
import Script from 'next/script'
import Link from 'next/link'
// import styles from '../styles/index.module.scss'
import styles from '../styles/Index.module.scss'

const index = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={`${styles.slider} slider`}>
                    <div className={`${styles.box1} ${styles.box}`}>
                        <div className={`${styles.bg} bg`}></div>
                        <div className={styles.details}>
                            <h1>GABOW</h1>
                            <p></p>
                            <Link href="/Mapas"><a className={`${styles.button}`}>Comenzar</a></Link>
                        </div>

                        <div className={styles.illustration}><div className={styles.inner}></div></div>
                    </div>
                    <div className={`${styles.box2} ${styles.box}`}>
                        <div className={`${styles.bg} bg`}></div>
                        <div className={styles.details}>
                            <h1>¡Consulta Interiores!</h1>
                            <p>
                                ¡Ya no busques los mapas fisicos! Con gabow podrás consultar la distribucion Interna, espacios Actualizados, salidas de Emergencia y elementos contra siniestros de cada establecimiento. Todo esto al alcance de tu mano.
                            </p>
                            <Link href="/Mapas"><a className={`${styles.button}`}>Comenzar</a></Link>
                        </div>

                        {/* <div className={styles.illustration}><div className={styles.inner}></div></div> */}
                    </div>

                    <div className={`${styles.box3} ${styles.box}`}>
                        <div className={`${styles.bg} bg`}></div>
                        <div className={styles.details}>
                            <h1>¿Perdido?</h1>
                            <p>
                                No hay problema. Hemos desarrollado un sistema de rutas con el que podras desplazarte sin miedo a perderte de nuevo.
                                A cuantos no nos ha pasado que visitamos un nuevo centro comercial y lo primero que hacemos es observar que tiendas hay. Eso ahora lo podrás hacer desde antes de llegar al establecimiento consultando su distribución interna.
                            </p>
                            <Link href="/Mapas"><a className={`${styles.button}`}>Comenzar</a></Link>
                        </div>

                        {/* <div className={styles.illustration}><div className={styles.inner}></div></div> */}
                    </div>

                    <div className={`${styles.box4} ${styles.box}`}>
                        <div className={`${styles.bg} bg`}></div>
                        <div className={styles.details}>
                            <h1>¡Todo en uno!</h1>
                            <p>
                                Cuando visites otro lugar publico como lo son centros comerciales no tendras que buscar su pagina, dirigirte al directorio y consultar su interior.
                                ¡Gabow te facilita eso!
                                A medida que el proyecto vaya creciendo, consigo tambien ira nuesto compilado de lugares publicos.
                            </p>
                            <Link href="/Mapas"><a className={`${styles.button}`}>Comenzar</a></Link>
                        </div>

                        {/* <div className={styles.illustration}><div className={styles.inner}></div></div> */}
                    </div>

                    <div className={`${styles.box5} ${styles.box}`}>
                        <div className={`${styles.bg} bg`}></div>
                        <div className={styles.details}>
                            <h1>Qu Ex “Hello To The New World”</h1>
                            <p>
                                Mision: Qu Ex es una empresa mexicana dedicada al desarrollo de software que asiste por medios digitales y proporciona herramientas de apoyo en situaciones de la vida cotidiana a un público general; con el fin de automatizarlas en cuestión de tiempo y logística.
                                Vision: Apoyar a las personas automatizar procesos que impliquen el uso de las tecnologías de la información a un nivel local (misma casa, colonia o barrio), pensando de manera empática y teniendo en mente la responsabilidad social que implica. Teniendo en la mira expandir nuestras tecnologías a un nivel poblacional más grande.
                            </p>
                            {/* <Link href="/Mapas"><a className={`${styles.button}`}>Comenzar</a></Link> */}
                        </div>

                        {/* <div className={styles.illustration}><div className={styles.inner}></div></div> */}
                    </div>

                </div>

                <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.prev} prev`} width="56.898" height="91" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(0 91) rotate(-90)" fill="#fff" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className={`${styles.next} next`} width="56.898" height="91" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(56.898) rotate(90)" fill="#fff" /></svg>
                <div className={`${styles.trail} trail`}>
                    <div className={`${styles.box1} box1`}>1</div>
                    <div className={`${styles.box2} box2`}>2</div>
                    <div className={`${styles.box3} box3`}>3</div>
                    <div className={`${styles.box4} box4`}>4</div>
                    <div className={`${styles.box5} box5`}>5</div>
                </div>
            </div>
            <Script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js' />
            <Script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/CSSRulePlugin3.min.js' />
            <Script src='/indexFuncion.js' strategy='lazyOnload'></Script>
        </>
    )
}

export default index