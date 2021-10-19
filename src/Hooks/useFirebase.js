import { useEffect, useState } from 'react';

import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
initializeAuthentication();



const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoging, setIsLoging] = useState(false)
    const [isLoading, setIsloading] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth()

    // google sign in

    const signinWithGoogle = (e) => {
        e.preventDefault()
        setIsloading(true);
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.massage)
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
        const gitHubProvider = new GithubAuthProvider;
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


    const handlePasswordChnage = (e) => {
        if (password.length < 6) {
            setError('password should be greater than 6 characters')
            return;
        }
        else {
            setPassword(e.target.value)
        }

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Must be use capital Latter')
            return;
        }

        else {
            setPassword(e.target.value)
        }

    }

    const handleRegsiter = (e) => {
        e.preventDefault()
        console.log('clicked')
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.massage)
            })
            .finally(() => setIsloading(false))
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
            setIsloading(false)
        })
        return () => unSubscribe;
    }, [])







    return {
        user,
        isLoading,
        isLoging,
        signinWithGoogle,
        handleEmailSignin,
        signinWithGithub,
        handlePasswordChnage,
        handleRegsiter,

        logOut
    }
};

export default useFirebase;