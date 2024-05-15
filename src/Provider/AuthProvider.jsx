import { createContext, useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import axios from "axios";


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
            const userEmail = currentUser?.email || user?.email
            const loggedUser = { email: userEmail }

            // console.log(loggedUser);

            setUser(currentUser)
            setLoading(false)

            // token issue if user exits
            if (currentUser) {
                axios.post("https://blogosphere-buzz-server.vercel.app/jwt", loggedUser, { withCredentials: true })
                    .then(() => {
                        // console.log("token response", res.data);
                    })
            }
            else {
                axios.post("https://blogosphere-buzz-server.vercel.app/logout", loggedUser, { withCredentials: true })
                    .then(() => {
                        // console.log(res.data);
                    })
            }
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