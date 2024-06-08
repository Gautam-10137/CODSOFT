import React,{createContext,useContext,useState,useEffect} from 'react';

const AuthContext= createContext();

export const useAuth=()=>useContext(AuthContext);

export const AuthProvider=({children})=>{

    const [isLoggedIn,setIsLoggedIn]=useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token); // Set isLoggedIn based on token existence
    }, []);

    return(
        <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}