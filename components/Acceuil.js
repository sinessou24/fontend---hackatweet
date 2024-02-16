import React from 'react';
import styles from '../styles/Acceuil.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEgg } from '@fortawesome/free-solid-svg-icons';
import Tweet from '../../backend/models/tweets';
import { useRouter } from 'next/router';

function Acceuil() {
    const dispatch = useDispatch();
	const user = useSelector((state) => state.users.value);

    // const [user, setUser] = useState('');
    const [message, setMessage] = useState('');
    const [like, setLike] = useState('');
    const [date, setDate] = useState('');
    const [hashtag, setHashtag] = useState('');
    const [AllTweets, setAllTweets] = useState([]);
    const [newTweet, setNewTweet] = useState(false)

    const router = useRouter();

    console.log({AllTweets});

    const handleSignIn = () => {
        router.push('/'); // Navigue vers la page /signup
      }


    const tweetClick = () => {
        fetch('http://localhost:3000/tweet/creatTweet', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    message: message,
                    user: user.token, }),
            }).then(response => response.json())
                .then(data => {
                    if (data.result) {
                        setMessage('')
                        setNewTweet(!newTweet)
                    }
                });
      }
      
      useEffect(() => {
        // Effectuez une requête GET pour récupérer les tweets existants
        fetch('http://localhost:3000/tweet/readTweet')
            .then(response => response.json())
            .then(data => {

                if (data && data.tweets.length > 0) {
                    console.log((data));
                    setAllTweets(data.tweets);
                }

                                  
                
            })
            .catch(error => {
                console.error('Error fetching tweets:', error);
            });
    }, [newTweet]); // Le tableau vide en tant que dépendance signifie que cette requête est exécutée une seule fois lors du montage du composant


  return (
    <div className={styles.main}>
    <div className={styles.nav}>
        <img className={styles.logo} src='twittrix.gif'/>
        <div className={styles.user}>
            <div className={styles.profile}>
            <FontAwesomeIcon className={styles.profilePicture} icon={faEgg} style={{color: "white"}}/>
            {/* <img src='logo_twitter.png' className={styles.profilePicture}/>  */}
            <div className={styles.names}>
                <p className={styles.firstname}>firstname</p>
                <p className={styles.username}>@username</p>
            </div>
            </div>
            <button onClick={handleSignIn} className={styles.logout}>Red Pills</button>
        </div>
    </div>
    <div className={styles.home}>
        <h4>Home</h4>
        <div className={styles.tweet}>
            <input className={styles.tweetInput} onChange={(e) => setMessage(e.target.value)} value={message} type='text' placeholder='type your tweet...'/>
           <div className={styles.tweetSend}>
           <h3>0/280</h3>
            <button onClick={() => tweetClick()} className={styles.tweetBtn}>Tweet</button>
           </div>
        </div>
        <div className={styles.AllTweets}>
        {AllTweets?.map(tweet => (
            <div key={tweet._id} className={styles.tweet}>
                <p className={styles.cardTweet}>{tweet.message}</p>
                {/* Afficher d'autres informations sur le tweet si nécessaire */}
            </div>
        ))}
        </div>
    </div>
    <div className={styles.trends}>
    <h3>Trends</h3>
    </div>
  </div>
  )
}

export default Acceuil;