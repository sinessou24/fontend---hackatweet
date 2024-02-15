import React from 'react';
import styles from '../styles/Acceuil.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEgg } from '@fortawesome/free-solid-svg-icons';

function Acceuil() {
  return (
    <div className={styles.main}>
    <div className={styles.nav}>
        <img className={styles.logo} src='logo_twitter.png'/>
        <div className={styles.user}>
            <div className={styles.profile}>
            <FontAwesomeIcon className={styles.profilePicture} icon={faEgg} style={{color: "white"}}/>
            {/* <img src='logo_twitter.png' className={styles.profilePicture}/>  */}
            <div className={styles.names}>
                <p className={styles.firstname}>firstname</p>
                <p className={styles.username}>@username</p>
            </div>
            </div>
            <button className={styles.logout}>Logout</button>
        </div>
    </div>
    <div className={styles.home}>
    </div>
    <div className={styles.trends}>
    </div>
  </div>
  )
}

export default Acceuil;