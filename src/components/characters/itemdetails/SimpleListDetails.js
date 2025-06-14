import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../utils/context.js"

import * as text from "../../utils/text.js" 
import OptionRadio from "./utils/OptionRadio.js"

/**
 * 
 * @param {*} props actionOnChange, selected.label
 * @returns 
 */
export default function SimpleListDetails(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const [categories, setCategories] = useState([])

    const backUrl = domain + 'items/'

    useEffect(() => fetchCategories(), [])
    useEffect(() => fetchCategories(), [campaign])

    function fetchCategories() {
        fetch(backUrl + "categories/" + campaign.id)
            .then(response => response.json())
            .then(json => setCategories(json))
    }

    function changeCategory(newId) {

    }

    function categoryDropdown() {
        let options = []
        for(let i=0; i<categories.length; i++) {
            options.push(
                <option value={categories[i].id}>{categories[i].name}</option>
            )
        }

        return(
            <select class="form-select select-dropdown my-1 square-3-nd" onChange={event => changeCategory(event.target.value)}>
                {options}
            </select>
        )
    }

    return(
        <div class="d-flex flex-column">
            <div class="d-flex flex-row justify-content-between align-items-center">
                {text.displayText('fieldname', language) + " :"}
                <input 
                    type="text" 
                    class="form-control square-3-nd" 
                    id="inputDefault" 
                    onChange={event => props.actionOnChange(event.target.value)}
                    value={props.selected.label}/>
            </div>
            <div class="d-flex flex-row justify-content-between align-items-center">
                {text.displayText('category', language) + " :"}
                {categoryDropdown()}
            </div>
            <OptionRadio 
                title="nameposition"
                options={["top", "left"]}
                selected={props.selected}
            />
            <OptionRadio 
                title="visibility"
                options={["gamemasteronly", "gamemasterandplayer", "everybody"]}
                selected={props.selected}
            />
        </div>
    )
}