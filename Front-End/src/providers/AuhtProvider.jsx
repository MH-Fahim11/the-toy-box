import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword,getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const GoogleProvider = new GoogleAuthProvider();
const auth = getAuth(app)
// eslint-disable-next-line react/prop-types
const AuhtProvider = ({children}) => {
    const [user, setUser] =useState(null);

    const[loading, setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);

    }
    
    const signInWithEmail =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const singInWithGoogle =() => {
        return signInWithPopup(auth,GoogleProvider);
      };
    
    const updateProfile =() => {
      };
    
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,loggedUser=>{
            setUser(loggedUser)
            setLoading(false);
        })
        return()=>{
            unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        signInWithEmail,
        singInWithGoogle,
        logOut,
        updateProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
//eslint-disable-next-line react/prop-types
export default AuhtProvider;