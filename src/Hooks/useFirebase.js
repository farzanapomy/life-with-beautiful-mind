import { useEffect, useState } from 'react';

import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

initializeAuthentication();



const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth()

    // google sign in





    const signinWithGoogle = () => {
        setIsloading(true);
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsloading(false))
    }

    const logOut = () => {
        setIsloading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsloading(false))
    }

    // handle github 

    const signinWithGithub = (e) => {
        e.preventDefault()
        setIsloading(true);
        const gitHubProvider = new GithubAuthProvider();
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.massage)
            })
            .finally(() => setIsloading(false))
    }





    //     handle email signin

    const handleEmailSignin = (e) => {
        setEmail(e.target.value)
    }


    const handlePasswordChange = (e) => {
        if (e.target.value.length < 6) {
            setError('password should be greater than 6 characters')
            return;
        }
        else {
            setPassword(e.target.value)
        }

        if (!/(?=.*[A-Z].*[a-z])/.test(password)) {
            setError('Must be use capital Latter')
            return;
        }

        else {
            setPassword(e.target.value)
        }

    }

    const handleRegister = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch(error => {
                setError(error.massage)
            })
            .finally(() => setIsloading(false))
    }


    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
                setUser()
            })
            .catch(error => {
                setError(error.massage)
            })
    }
 
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsloading(false)
        });
        return () => unSubscribed;
    }, [])







    return {
        user,
        signinWithGoogle,
        isLoading,
        handleEmailSignin,
        signinWithGithub,
        handlePasswordChange,
        handleRegister,
        processLogin,
        logOut
    }
};

export default useFirebase;