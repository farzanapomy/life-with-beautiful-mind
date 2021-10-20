import { useEffect, useState } from 'react';

import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, } from 'firebase/auth'

initializeAuthentication();



const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name,setName]=useState('')

    const auth = getAuth()


    // google sign in

    const signinWithGoogle = () => {
        setIsloading(true);
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
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
        setPassword(e.target.value)
    }

    const handleRegister = (e) => {
        e.preventDefault()
        setIsloading(true)
        if (password.length < 6) {
            setError('Password should be grater than 6 character')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
                emailVerify()
            })
            .catch(error => {
                setError(error.massage)
            })
            .finally(() => setIsloading(false))

    }


    const handleLogin = (e) => {
        e.preventDefault()
        setIsloading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
            })
            .catch(error => {
                setError(error.massage)
            })
            .finally(() => setIsloading(false))

    }

    const emailVerify = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    }

    const handleResetPass = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
            })
    }

    const handleName=(e)=>{
        setName(e.target.value)
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
        error,
        handleLogin,
        handleName,
        handleRegister,
        handleResetPass,
        signinWithGoogle,
        isLoading,
        handleEmailSignin,
        signinWithGithub,
        handlePasswordChange,
        logOut
    }
};

export default useFirebase;