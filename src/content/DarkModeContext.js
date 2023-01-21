import React, { createContext, useEffect, useState } from 'react'

export  const DarkModeContext =createContext();

export const DarkModeContextProvider = ({children})=>{
    // var localst = localStorage.getitem("darkMode");
    // const val = JSON.parse(localst);
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    
  const [hamburger, sethamburger] = useState(null);

    const toggle = ()=>{ 
        setDarkMode(!darkMode); 
    };

    useEffect(() => { 
     localStorage.setItem("darkMode",darkMode);
    }, [darkMode , hamburger])
    
    return (
        <DarkModeContext.Provider value={{darkMode,hamburger,toggle}}>
            {children}
        </DarkModeContext.Provider>
    )
}


