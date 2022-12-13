import React , {useState} from 'react'
import styles from '../styles/Contacto.module.scss'
import axios from 'axios'

const handleSendEmail =() =>{



}

const Contacto = () => {

  const [sesion,setSesion] = useState();

  const getSesion = async() =>{

    const response = await axios.post('/api/auth/getCookie');
    setSesion(response.status);
    console.log(sesion);

  }

  if(sesion == 'Token verified'){

    return (
      <div className={styles.container}>
        <form className={styles.main}>
          <section>
            <label className={styles.label}>Asunto:</label>
            <input className={styles.input} type="text" placeholder="Asunto:" />
            <label className={styles.label}>Mensaje:</label>
            <textarea className={styles.mes} rows='6' placeholder="Mensaje:"></textarea>
          </section>
          <div><button className={styles.button}>Enviar</button></div>
        </form>
      </div>
    )

  }
  if(sesion == 'Invalid token'){

    return (
      <div className={styles.container}>
        <form className={styles.main}>
          <section>
            <label className={styles.label}>Tu Nombre:</label>
            <input className={styles.input} type="text" placeholder="Tu Nombre:" />
            <label className={styles.label}>Tu Email:</label>
            <input className={styles.input} type="text" placeholder="Tu Email:" />
            <label className={styles.label}>Asunto:</label>
            <input className={styles.input} type="text" placeholder="Asunto:" />
            <label className={styles.label}>Mensaje:</label>
            <textarea className={styles.mes} rows='6' placeholder="Mensaje:"></textarea>
          </section>
          <div><button onClick={handleSendEmail} className={styles.button}>Enviar</button></div>
        </form>
      </div>
    )

  }
}

export default Contacto