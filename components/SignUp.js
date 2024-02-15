import React from 'react';
import styles from '../styles/sign.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function SignUp() {

  return (
    <div className={styles.main}>
        <input className={styles.input} type='text' placeholder='Firstname'/>
        <input className={styles.input} type='text' placeholder='Username'/>
        <input className={styles.input} type='text' placeholder='Password'/>
        <button className={styles.signUpButton}>Sign Up</button>
        <span className={styles.goBackBtn}>
        <FontAwesomeIcon  className={styles.leftArrow} icon={faArrowLeft} />
        </span>
    </div>
  )
}

export default SignUp;