import { createContext, useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    // google signIn
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user catch
    const updateUserProfile = (name, photoUrl, email) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl,
            email: email,
        })
    }

    // Logout
    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        loginUser,
        createUser,
        googleLogin,
        user,
        updateUserProfile,
        loading,
        logOut
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })

        return () => {
            unSubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;