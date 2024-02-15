import React from 'react';
import styles from '../styles/Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Login() {
  

  return (
    <div className={styles.main}>
    <div className={styles.image}></div>
    <div className={styles.access}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src='logo_twitter.png'/>
        </div>
        <h1 className={styles.title}>See what's <br />happening </h1>
        <h2 className={styles.secondTitle}> Join Hackatweet today. </h2>
        <div className={styles.signUp}>
          <button className={styles.signUpButton}>Sign Up</button>
        </div>
            <h3 className={styles.already}>Already have an account ?</h3>
            <div className={styles.signIn}>
            <button className={styles.signInButton}>Sign In</button>
            </div>
      </div>
  </div>
  )
}

export default Login;
