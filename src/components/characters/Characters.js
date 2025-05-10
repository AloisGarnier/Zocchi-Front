import React, { useContext, useState, useEffect } from "react"
import TemplateCreation from "./TemplateCreation"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 
import CharacterSheet from "./CharacterSheet.js"

export default function Characters(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const [sheets, setSheets] = useState([])
    const [sheet, setSheet] = useState(null)

    useEffect(() => fetchSheets(), [])
    
    function fetchSheets() {
        let newSheets = []
        if(!campaign.characterName) {
            newSheets.push({name:text.displayText('creationperso', language), id:0})
        }
        setSheets(newSheets)
        setSheet(newSheets[0])
    }

    function switchSheet() {

    }

    function selectDropdown() {
        let options = []
        for(let i=0; i<sheets.length; i++) {
            options.push(
                <option value={sheets[i].id}>{sheets[i].name}</option>
            )
        }

        return(
            <select class="form-select select-dropdown mb-3" id="exampleSelect1" onChange={() => switchSheet()}>
                {options}
            </select>
        )
    }

    function displaySheet() {
        if(sheet) {
            if(sheet.id == 0) {
                return <TemplateCreation />
            }
            return <CharacterSheet />
        }
    }

    return(
        <div class="d-flex flex-column align-items-center">
            {selectDropdown()}
            {displaySheet()}
        </div>
    )
}