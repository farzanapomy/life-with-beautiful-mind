import { useEffect, useState } from 'react';

import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth'
initializeAuthentication();



const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoging, setIsLoging] = useState(false)
    const [isLoading, setIsloading] = useState(true)


    const auth = getAuth()
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

    const handleCheckBox = e => {
        setIsLoging(e.target.checked)
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

        logOut
    }
};

export default useFirebase;