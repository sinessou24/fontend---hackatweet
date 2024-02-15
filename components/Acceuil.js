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
        <h4>Home</h4>
        <div className={styles.tweet}>
            <input className={styles.tweetInput} type='text' placeholder='type your tweet...'/>
           <div className={styles.tweetSend}>
           <h3>0/280</h3>
            <button className={styles.tweetBtn}>Tweet</button>
           </div>
        </div>
    </div>
    <div className={styles.trends}>
    <h3>Trends</h3>
    </div>
  </div>
  )
}

export default Acceuil;