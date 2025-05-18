import React, { useContext, useState } from "react"
import { ThemeContext } from "../utils/context";

import * as text from "../utils/text.js" 
import Card from "../utils/Card.js";
import { useNavigate } from "react-router-dom";

export default function NewCampaign(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const [name, setName] = useState("")

    const navigate = useNavigate()

    const backUrl = domain + "campaign/"

    function createCampaign() {
        if(name) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            }
            fetch(backUrl + "new/" + user.id + "/" + name, requestOptions)
                .then(response => response.json())
                .then(json => changeCampaign(json))
                .then(() => navigate("/personnages"))
        }
        
    }

    return(
        <div class="d-flex flex-column align-items-center">
            <div class="mb-3">
                {text.displayText('createnewcampaign', language)}
            </div>
            <div class="form-floating mb-3">
                <input class="form-control" id="floatingInput" value={name} onChange={event => setName(event.target.value)}/>
                <label for="floatingInput">{text.displayText('name', language)}</label>
            </div>
            <a type='button' class="btn btn-success" onClick={() => createCampaign()}>
                {text.displayText('create', language)}
            </a>
        </div>
    )
}