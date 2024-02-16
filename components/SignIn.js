import React from 'react';
import styles from '../styles/sign.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/users';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function SignIn() {
  const dispatch = useDispatch();
	const user = useSelector((state) => state.users.value);

  const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

  const signInClick = () => {

		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: signInUsername, token: data.token }));
					setSignInUsername('');
					setSignInPassword('');
				}
			});
	};
  
  return (
    <div className={styles.main}>
        <input className={styles.input} onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} type='text' placeholder='Username'/>
        <input className={styles.input} onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} type='text' placeholder='Password'/>
        <button onClick={() => signInClick()} className={styles.signUpButton}>Sign In</button>
        {/* <span className={styles.goBackBtn}>
        <FontAwesomeIcon  className={styles.leftArrow} icon={faArrowLeft} />
        </span> */}
    </div>
  )
}

export default SignIn;