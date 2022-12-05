import React from 'react'
import styles from '../styles/Prueba.module.scss'

const Prueba = () => {

  const showLogin = () => {
    var prism = document.querySelector(`.${styles.rec_prism}`);
    prism.style.transform = "translateZ(-100px)";
  }

  const showSignup = () => {
    var prism = document.querySelector(`.${styles.rec_prism}`);
    prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
  }

  const showForgotPassword = () => {
    var prism = document.querySelector(`.${styles.rec_prism}`);
    prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
  }

  const showSubscribe = () => {
    var prism = document.querySelector(`.${styles.rec_prism}`);
    prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
  }

  const showContactUs = () => {
    var prism = document.querySelector(`.${styles.rec_prism}`);
    prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
  }

  const showThankYou = () => {
    var prism = document.querySelector(`.${styles.rec_prism}`);
    prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
  }

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.nav}>
          <li onClick={() => { showLogin() }}>Login</li>
          <li onClick={() => { showSignup() }}>Sign up</li>
          <li onClick={() => { showForgotPassword() }}>Forgot password</li>
          <li onClick={() => { showSubscribe() }}>Subscribe</li>
          <li onClick={() => { showContactUs() }}>Contact us</li>
        </ul>
        <div className={styles.wrapper}>
          <div className={styles.rec_prism}>
            <div className={`${styles.face} ${styles.face_top}`}>
              <div className={styles.content}>
                <h2>Subscribe</h2>
                <small className={styles.small}>Enter your email so we can send you the latest updates!</small>
                <form onsubmit="event.preventDefault()">
                  <div className={styles.field_wrapper}>
                    <input type="text" name="email" placeholder="email" />
                    <label>e-mail</label>
                  </div>
                  <div className={styles.field_wrapper}>
                    <input type="submit" onClick={() => { showThankYou() }} />
                  </div>
                </form>
              </div>
            </div>
            <div className={`${styles.face} ${styles.face_front}`}>
              <div className={styles.content}>
                <h2>Sign in</h2>
                <form onsubmit="event.preventDefault()">
                  <div className={styles.field_wrapper}>
                    <input type="text" name="username" placeholder="username" />
                    <label>username</label>
                  </div>
                  <div className={styles.field_wrapper}>
                    <input type="password" name="password" placeholder="password" autocomplete="new-password" />
                    <label>password</label>
                  </div>
                  <div className={styles.field_wrapper}>
                    <input type="submit" onClick={() => { showThankYou() }} />
                  </div>
                  <span className={styles.psw} onClick={() => { showForgotPassword() }}>Forgot Password?   </span>
                  <span className={styles.signup} onClick={() => { showSignup() }}>Not a user?  Sign up</span>
                </form>
              </div>
            </div>
            <div className={`${styles.face} ${styles.face_back}`}>
              <div className={styles.content}>
                <h2>Forgot your password?</h2>
                <small className={styles.small}>Enter your email so we can send you a reset link for your password</small>
                <form onsubmit="event.preventDefault()">
                  <div className={styles.field_wrapper}>
                    <input type="text" name="email" placeholder="email" />
                    <label>e-mail</label>
                  </div>
                  <div className={styles.field_wrapper}>
                    <input type="submit" onClick={() => { showThankYou() }} />
                  </div>
                </form>
              </div>
            </div>
            <div className={`${styles.face} ${styles.face_right}`}>
              <div className={styles.content}>
                <h2>Sign up</h2>
                <form onsubmit="event.preventDefault()">
                  <div className={styles.field_wrapper}>
                    <input type="text" name="email" placeholder="email" />
                    <label>e-mail</label>
                  </div>
                  <div className={styles.field_wrapper}>
                    <input type="password" name="password" placeholder="password" autocomplete="new-password" />
                    <label>password</label>
                  </div>
                  <div className={styles.field_wrapper}>
                    <input type="password" name="password2" placeholder="password" autocomplete="new-password" />
                    <label>re-enter password</label>
                  </div>
                  <div className={styles.field_wrapper}>
                    <input type="submit" onClick={() => { showThankYou() }} />
                  </div>
                  <span className={styles.singin} onClick={() => { showLogin() }}>Already a user?  Sign in</span>
                </form>
              </div>
            </div>
            <div className={`${styles.face} ${styles.face_left}`}>
              <div className={styles.content}>
                <h2>Contact us</h2>
                <form onsubmit="event.preventDefault()">
                  <div className={styles.field_wrapper}>
                    <input type="text" name="name" placeholder="name" />
                    <label>Name</label>
                  </div>
                  <div className={styles.field_wrapper}>
                    <input type="text" name="email" placeholder="email" />
                    <label>e-mail</label>
                  </div>
                  <div className={styles.field_wrapper}>
                    <textarea placeholder="your message"></textarea>
                    <label>your message</label>
                  </div>
                  <div className={styles.field_wrapper}>
                    <input type="submit" onClick={() => { showThankYou() }} />
                  </div>
                </form>
              </div>
            </div>
            <div className={`${styles.face} ${styles.face_bottom}`}>
              <div className={styles.content}>
                <div className={styles.thank_you_msg}>
                  Thank you!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Prueba