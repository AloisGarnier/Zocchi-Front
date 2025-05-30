import React, { useContext, useState, useEffect } from "react"
import TemplateCreation from "./TemplateCreation"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 
import CharacterSheet from "./CharacterSheet.js"

export default function Characters(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const charUrl = domain + 'charsheet/'

    const [sheets, setSheets] = useState([])
    const [sheet, setSheet] = useState(null)

    useEffect(() => fetchSheets(), [])
    useEffect(() => fetchSheets(), [campaign])

    function processSheets(json, newSheets, index) {
        if(json) {
            for(let i=0; i<json.length; i++) {
                if(json[i].name) {
                    newSheets.push(json[i])
                }
            }
            setSheets(newSheets) 
            setSheet(newSheets[index])
        }
    }
    
    function fetchSheets(index = 0) {
        let newSheets = []
        if(campaign) {
            if(!campaign.characterName) {
                newSheets.push({name:text.displayText('creationperso', language), id:0})
            }
            fetch(charUrl + "campaign/" + campaign.id)
                .then(response => response.json())
                .then(json => processSheets(json, newSheets, index))
        }
    }

    function selectDropdown() {
        let options = []
        for(let i=0; i<sheets.length; i++) {
            options.push(
                <option value={i}>{sheets[i].name}</option>
            )
        }

        return(
            <select class="form-select select-dropdown mb-3" id="exampleSelect1" onChange={(event) => {fetchSheets(event.target.value)}}>
                {options}
            </select>
        )
    }

    function displaySheet() {
        if(sheet) {
            if(sheet.id == 0) {
                return <TemplateCreation />
            }
            return <CharacterSheet sheet={sheet}/>
        }
    }

    return(
        <div class="d-flex flex-column align-items-center">
            {selectDropdown()}
            {displaySheet()}
        </div>
    )
}