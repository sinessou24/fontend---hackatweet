import React from 'react';
import styles from '../styles/Login.module.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import SignUp from './SignUp';
import SignIn from './SignIn';

function Login() {

  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);


  

  const signUpClick = () => {
    setSignUp(true)
  }

  const signInClick = () => {
    setSignIn(true)
  }

  const closeModale = () => {
    setSignUp(false)
    setSignIn(false)
  }



  return (
    <div className={styles.main}>
    <div className={styles.image}></div>
    <div className={styles.access}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src='twittrix.gif'/>
        </div>
        <h1 className={styles.title}>See what tweet <br />is real </h1>
        {!signUp && !signIn &&
            <div> 
              <h2 className={styles.secondTitle}> Join the Tweetrix Now </h2> 
              <div className={styles.signUp}>
               <button onClick={() => signUpClick()} className={styles.signUpButton}>Blue Pills</button>
              </div>
              <h3 className={styles.already}>Are you the chosen one ?</h3>
              <div className={styles.signIn}>
              <button onClick={() => signInClick()} className={styles.signInButton}>Get in Matrix</button>
              </div>
            </div>}
            {signUp &&
            <div className={styles.signModale}>
              <SignUp />
              <FontAwesomeIcon onClick={() => closeModale()} className={styles.leftArrow} icon={faArrowLeft} />
              </div>
              }
            {signIn &&
            <div className={styles.signModale}>
              <SignIn />
              <FontAwesomeIcon onClick={() => closeModale()} className={styles.leftArrow} icon={faArrowLeft} />
              </div>
              }
      </div>
  </div>
  )
}

export default Login;
