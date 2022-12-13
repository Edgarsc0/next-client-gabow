import React , {useState} from 'react'
import styles from '../styles/Contacto.module.scss'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';


const Contacto = () => {

  const [sesion,setSesion] = useState();
  const [statusMail,setStatusMail] = useState();

  const getSesion = async() =>{

    const response = await axios.post('/api/auth/getCookie');
    //setSesion(response.data.status)
    //seesion=="Token verified"
    setSesion(response.data.status);
    console.log(sesion);

  }

  const handleSendEmail =async(e) =>{  
    console.log({
        //params
        name : e.target.name.value,
        email : e.target.email.value,
        affair : e.target.affair.value,
        message : e.target.message.value
      })
      /*const response = await axios.post('/api/auth/sendContactNS',{
        //params
        name : e.target.name.value,
        email : e.target.email.value,
        affair : e.target.affair.value,
        message : e.target.message.value
      });
      //status.data.status
      //const response =await....
      //setStatus(respone.data.status);
      setStatusMail(response.data.status);
      console.log(statusMail);
      if(statusMail = 'Message sent'){

        toast.success(`Se envio correctamente el correo, gracias`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
      });

      window.location.reload();

      }
      if(statusMail == 'Bad Email sent'){

        toast.error('Ups! Algo salio mal al momento de enviar el correo', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
      });
  
    }*/
  
  }

  useEffect(()=>{
    if(!sesion){
      getSesion();
    }
  });
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
      <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className={styles.container}>
        <form className={styles.main}>
          <section>
            <label className={styles.label}>Tu Nombre:</label>
            <input name='name' className={styles.input} type="text" placeholder="Tu Nombre:" />
            <label className={styles.label}>Tu Email:</label>
            <input name='email' className={styles.input} type="text" placeholder="Tu Email:" />
            <label className={styles.label}>Asunto:</label>
            <input name='affair' className={styles.input} type="text" placeholder="Asunto:" />
            <label className={styles.label}>Mensaje:</label>
            <textarea name='message' className={styles.mes} rows='6' placeholder="Mensaje:"></textarea>
          </section>
          <div><button onClick={handleSendEmail} className={styles.button}>Enviar</button></div>
        </form>
      </div>
      </>
    )

  }
}

export default Contacto