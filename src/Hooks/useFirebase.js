import firebaseInitApp from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";


firebaseInitApp();
const auth = getAuth();


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    console.log(user, error)

    const gooleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }
    
    const signUp = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            updateProfile(auth.currentUser, {
                displayName: {name}
                })
            .then(result => {
                const user = result.user;
                setUser(user)
        })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })

    }
    const signIn = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                setError({})
        })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(()=>setIsLoading(false))

    }
    useEffect(() => {
        const unsbscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsbscribed;
    }, [])
    
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(()=>isLoading(false))
    }




    return {
        user,
        error,
        gooleSignIn,
        signUp,
        signIn,
        logOut,
        isLoading
    }

}

export default useFirebase;