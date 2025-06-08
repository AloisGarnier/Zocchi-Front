import React, { useContext, useState } from "react"
import { ThemeContext } from "../utils/context";

import * as text from "../utils/text.js" 
import { useNavigate } from "react-router-dom"

export default function JoinCampaign(props) {

    const [code, setCode] = useState("")
    const [campaignToJoin, setCampaignToJoin] = useState(null)
    const [charName, setCharName] = useState("")
    const [alreadyTried, setAlreadyTried] = useState(false)

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const navigate = useNavigate()

    const backUrl = domain + "campaign/"

    function fetchCampaignToJoin() {
        setAlreadyTried(true)
        if(code) {
            fetch(backUrl + "byCode/" + code)
                .then(response => response.json())
                .then(json => setCampaignToJoin(json.id != null ? json : null))
        } else {
            setCampaignToJoin(null)
        }
    }

    function joinCampaign() {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        }
        fetch(backUrl + "add/" + user.id + "/" + campaignToJoin.id + "/" + charName, requestOptions)
            .then(() => changeCampaign(campaignToJoin))
            .then(() => navigate("/personnages"))
    }

    function campaignToJoinDisplay() {
        if(!campaignToJoin) {
            if(alreadyTried) {
                return(
                    <div>
                        Merci d'entrer un code valide
                    </div>
                )
            }
            return
        }
        return(
            <div class="d-flex flex-column align-items-center">
                {text.displayText('joincampaign1', language) + campaignToJoin.name + text.displayText('joincampaign2', language) + campaignToJoin.characterName + text.displayText('joincampaign3', language)}
                <div class="form-floating my-3">
                    <input class="form-control" id="floatingInput" value={charName} onChange={event => setCharName(event.target.value)}/>
                    <label for="floatingInput">{text.displayText('charName', language)}</label>
                </div>
                <a type='button' class="btn btn-success mb-3" onClick={() => joinCampaign()}>
                    {text.displayText('join', language)}
                </a>
            </div>
        )
    }

    return(
        <div class="d-flex flex-column align-items-center">
            <div class="mb-3">
                {text.displayText('askdm', language)}
            </div>
            <div class="form-floating mb-3">
                <input class="form-control" id="floatingInput" value={code} onChange={event => setCode(event.target.value)}/>
                <label for="floatingInput">{text.displayText('code', language)}</label>
            </div>
            <a type='button' class="btn btn-info mb-3" onClick={() => fetchCampaignToJoin()}>
                {text.displayText('search', language)}
            </a>
            {campaignToJoinDisplay()}
        </div>
    )
}