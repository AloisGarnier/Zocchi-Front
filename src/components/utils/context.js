import React, {useState, useEffect, createContext} from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    //const domain = "http://localhost:8081/"
    const domain = "https://34.163.215.231:8081/"

    const campaignUrl = domain + 'campaign/'

    const [language, setLanguage] = useState('fr')
    const [user, setUser] = useState(null)
    const [campaign, setCampaign] = useState(null)

    useEffect(() => init(), [])

    function init() {
        if(localStorage.getItem("language")) {
            setLanguage(localStorage.getItem("language"))
        }
        if(localStorage.getItem("user") && localStorage.getItem("user") != "undefined") {
            setUser(JSON.parse(localStorage.getItem("user")))
        }
        if(localStorage.getItem("campaign") && localStorage.getItem("campaign") != "undefined") {
            setCampaign(JSON.parse(localStorage.getItem("campaign")))
        }
    }

    function changeLanguage(newLanguage) {
        setLanguage(newLanguage)
        localStorage.setItem("language", newLanguage)
    }

    function changeUser(newUser) {
        setUser(newUser)
        localStorage.setItem("user", JSON.stringify(newUser))
        if(!newUser) {
            changeCampaign(null)
        } else if(localStorage.getItem("campaign") && localStorage.getItem("campaign") != "undefined") {
            setCampaign(localStorage.getItem("campaign"))
        } else if(newUser) {
            fetch(campaignUrl + "byPlayer/" + newUser.id)
                .then(response => response.json())
                .then(json => changeCampaign(json[0]))
        }
    }

    function changeCampaign(newCampaign) {
        setCampaign(newCampaign)
        localStorage.setItem("campaign", JSON.stringify(newCampaign))
    }
 
    return (
        <ThemeContext.Provider value={{domain, language, changeLanguage, user, changeUser, campaign, changeCampaign}}>
            {children}
        </ThemeContext.Provider>
    )
}