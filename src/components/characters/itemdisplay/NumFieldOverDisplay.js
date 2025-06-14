import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../utils/context.js"

import * as text from "../../utils/text.js"

/**
 * 
 * @param {*} props actionOnChange, element
 * @returns 
 */
export default function NumFieldBonusDisplay(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const backUrl = domain + 'charsheet/'

    const [value, setValue] = useState("")
    const [secondary, setSecondary] = useState("")
    const [options, setOptions] = useState({})

    useEffect(() => fetchInitialValues(), [])

    function processJson(json) {
        setValue(json.value)
        setSecondary(json.secondary)
        setOptions(json.element.options)
    }

    function fetchInitialValues() {
        if(props.character && props.element) {
            fetch(backUrl + "getValues/" + props.character.id + "/" + props.element.id + "/" )
                .then(response => response.json())
                .then(json => processJson(json))
        }
    }

    function processValue(newValue, newSecondary) {
        const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
            }
        fetch(backUrl + "update/" + props.character.id + "/" + props.element.id + "/" + (newValue != "" ? newValue : "empty") + "/" + (newSecondary != "" ? newSecondary : "empty") , requestOptions)
            .then(() => {setValue(newValue); setSecondary(newSecondary)})
    }

    function treatPosition() {
        switch(options.position) {
            case "TOP":
                return(
                    <div class="d-flex flex-column align-items-center m-2">
                        <div>{props.element.label}</div>
                        <div class="d-flex flex-row align-items-center">
                            <input class="form-control numfield" value={value} onChange={event => processValue(event.target.value, secondary)}/>
                            <div class="mx-1">/</div>
                            <input class="form-control numfield" value={secondary} onChange={event => processValue(value, event.target.value)}/>
                        </div>
                    </div>
                )
            case "LEFT":
                return(
                    <div class="d-flex flex-row align-items-center m-2">
                        <div class="mx-1">{props.element.label}</div>
                        <input class="form-control numfield" value={value} onChange={event => processValue(event.target.value, secondary)}/>
                        <div class="mx-1">/</div>
                        <input class="form-control numfield" value={secondary} onChange={event => processValue(value, event.target.value)}/>
                    </div>
                )
            default:
                break
        }
    }

    function treatVisibility() {
        switch(options.visibility) {
            case "EVERYBODY":
                return treatPosition()
            case "GAMEMASTERANDPLAYER":
                if(!campaign.characterName || campaign.characterId == props.character.id) {
                    return treatPosition()
                }
                break
            case "GAMEMASTERONLY":
                if(!campaign.characterName) {
                    return treatPosition()
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