import React, {useState, createContext} from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const domain = "http://localhost:8081/"
    //const domain = "http://34.155.93.110:8081/"

    const campaignUrl = domain + 'campaign/'

    const [language, setLanguage] = useState(localStorage.getItem("language") ?? 'fr')
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) ?? null)
    const [campaign, setCampaign] = useState(JSON.parse(localStorage.getItem("campaign")) ?? null)

    function changeLanguage(newLanguage) {
        setLanguage(newLanguage)
        localStorage.setItem("language", newLanguage)
    }

    function changeUser(newUser) {
        setUser(newUser)
        localStorage.setItem("user", JSON.stringify(newUser))
        if(!newUser) {
            changeCampaign(null)
        } else if(localStorage.getItem("campaign") && localStorage.getItem("campaign") != "null") {
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