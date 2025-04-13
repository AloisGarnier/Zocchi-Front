import React, {useState, useContext, createContext } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const domain = "http://localhost:8081"
    //const domain = "http://34.155.93.110:8081"

    const [language, setLanguage] = useState('fr')
    const changeLanguage = () => {
        setLanguage(theme === 'fr' ? 'en' : 'fr')
    }
 
    return (
        <ThemeContext.Provider value={{domain, language, changeLanguage}}>
            {children}
        </ThemeContext.Provider>
    )
}