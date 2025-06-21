import React, { useState, useEffect, useContext } from "react"
import { ThemeContext } from "../../utils/context.js"

import * as text from "../../utils/text.js" 

/**
 * 
 * @param {*} props actionOnChange, element
 * @returns 
 */
export default function LabelDisplay(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const backUrl = domain + 'charsheet/'
    
    const [options, setOptions] = useState({})

    useEffect(() => fetchInitialValues(), [])

    function processJson(json) {
        setOptions(json.element.options)
    }

    function fetchInitialValues() {
        if(props.character && props.element) {
            fetch(backUrl + "getValues/" + props.character.id + "/" + props.element.id + "/" )
                .then(response => response.json())
                .then(json => processJson(json))
        }
    }

    function treatSize() {
        switch(options.size) {
            case "LARGE":
                return <h2 class="mx-1">{props.element.label}</h2>
            case "MEDIUM":
                return <h4 class="mx-1">{props.element.label}</h4>
            case "SMALL":
                return <div class="mx-1">{props.element.label}</div>
        }
    }

    function treatVisibility() {
        switch(options.visibility) {
            case "EVERYBODY":
                return treatSize()
            case "GAMEMASTERANDPLAYER":
                if(!campaign.characterName || campaign.characterId == props.character.id) {
                    return treatSize()
                }
                break
            case "GAMEMASTERONLY":
                if(!campaign.characterName) {
                    return treatSize()
                }
                break
            default:
                break
        }
    }

    return(
        treatVisibility()
    )
}