import React, { useState, useEffect, useContext } from "react"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 
import Table from "../utils/Table.js"

export default function CampaignOptions(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const [name, setName] = useState("")
    useEffect(() => setName(campaign ? campaign.name : ""), [campaign])

    const [chars, setChars] = useState([])
    const [isChanged, setIsChanged] = useState(false)
    useEffect(() => fetchChars(), [campaign, isChanged])

    const backUrl = domain + "campaign/"
    const charUrl = domain + "charsheet/"

    function fetchChars() {
        if(campaign) {
            fetch(charUrl + "campaign/" + campaign.id)
                .then(response => response.json())
                .then(json => setChars(json))
        }
    }

    function updateCampaign() {
        fetch(backUrl + "byId/" + campaign.id + "/" + user.id)
            .then(response => response.json())
            .then(json => changeCampaign(json))
    }

    function modifyName(newName) {
        if(newName) {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
            }
            fetch(backUrl + "modifyName/" + campaign.id + "/" + newName, requestOptions)
                .then(() => setName(newName))
                .then(() => updateCampaign())
        }
    }

    function deleteChar(id) {
        const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            }
            fetch(charUrl + "delete/" + id, requestOptions)
                .then(() => setIsChanged(bool => !bool))
    }

    function deleteButton(char) {
        if(char.name) {
            return(
                <a type='button' onClick={() => deleteChar(char.id)}>
                    <i class="fa-solid fa-trash-xmark justify-self-center" style={{color: "#EE0000",}} />
                </a>
            )
        }
    }

    function characterData() {
        if(chars) {
            let dataDisplay = []
            for(let i=0; i<chars.length; i++) {
                dataDisplay.push([chars[i].player, chars[i].name ?? text.displayText('dungeonmaster', language), deleteButton(chars[i])])
            }
            return dataDisplay
        }
    }

    return(
        <div class="d-flex flex-column align-items-center">
            <div class="form-floating mb-3">
                <input class="form-control" id="floatingInput" value={campaign ? campaign.code : ""}/>
                <label for="floatingInput">{text.displayText('code', language)}</label>
            </div>
            <div class="form-floating mb-3">
                <input class="form-control" id="floatingInput2" value={name} onChange={event => modifyName(event.target.value)}/>
                <label for="floatingInput2">{text.displayText('campaignname', language)}</label>
            </div>
            <Table 
                heading={[text.displayText('player', language), text.displayText('character', language), ""]}
                data={characterData()}
            />
        </div>
    )
}