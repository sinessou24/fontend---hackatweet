import React from 'react';
import styles from '../styles/sign.module.css';
import { useState, useEffect } from 'react';
import { login, logout } from '../reducers/users';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Acceuil from './Acceuil';

function SignUp() {
    const dispatch = useDispatch();
	const user = useSelector((state) => state.users.value);

    const [signUpfirstname, setSignUpFirstname] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');

    const signUpClick = () => {
        fetch('http://localhost:3000/users/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstname: signUpfirstname,username: signUpUsername, password: signUpPassword }),
            }).then(response => response.json())
                .then(data => {
                    if (data.result) {
                        dispatch(login({ username: signUpUsername, token: data.token }));
                        setSignUpFirstname('');
                        setSignUpUsername('');
                        setSignUpPassword('');
                    }
                });
      }

  return (
    <div className={styles.main}>
        <input className={styles.input} onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpfirstname} type='text' placeholder='Firstname'/>
        <input className={styles.input} onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} type='text' placeholder='Username'/>
        <input className={styles.input} onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} type='text' placeholder='Password'/>
        <button onClick={() => signUpClick()} className={styles.signUpButton}>Sign Up</button>
        {/* <span className={styles.goBackBtn}>
        <FontAwesomeIcon  className={styles.leftArrow} icon={faArrowLeft} />
        </span> */}
    </div>
  )
}

export default SignUp;