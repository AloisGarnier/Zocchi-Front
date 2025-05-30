import React, { useState, useEffect, useContext } from "react"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 

export default function CampaignOptions(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const [name, setName] = useState("")
    useEffect(() => setName(campaign ? campaign.name : ""), [campaign])

    const backUrl = domain + "campaign/"

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

    return(
        <div class="d-flex flex-column align-items-center">
            <div class="mb-3">
                {text.displayText('code', language) + " : " + (campaign ? campaign.code : "")}
            </div>
            <div class="form-floating mb-3">
                <input class="form-control" id="floatingInput" value={name} onChange={event => modifyName(event.target.value)}/>
                <label for="floatingInput">{text.displayText('campaignname', language)}</label>
            </div>
        </div>
    )
}