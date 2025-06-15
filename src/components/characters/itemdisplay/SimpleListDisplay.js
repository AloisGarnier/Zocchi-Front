import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../utils/context.js"

import * as text from "../../utils/text.js"

/**
 * 
 * @param {*} props actionOnChange, element
 * @returns 
 */
export default function SimpleListDisplay(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const backUrl = domain + 'charsheet/'
    const itemUrl = domain + 'items/'

    const [item, setItem] = useState("")
    const [possibleItems, setPossibleItems] = useState([])
    const [options, setOptions] = useState({})

    useEffect(() => fetchItem(), [])
    useEffect(() => fetchPossibleItems(), [])
    useEffect(() => fetchOptions(), [])

    function fetchItem() {
        if(props.character && props.element) {
            fetch(backUrl + "item/" + props.character.id + "/" + props.element.id)
                .then(response => response.json())
                .then(json => setItem(json))
        }
    }

    function fetchPossibleItems() {
        if(props.element) {
            fetch(itemUrl + "categoryBySheetElement/" + props.element.id)
                .then(response => response.json())
                .then(json => setPossibleItems(json.items))
        }
    }

    function fetchOptions() {
        if(props.character && props.element) {
            fetch(backUrl + "getValues/" + props.character.id + "/" + props.element.id + "/" )
                .then(response => response.json())
                .then(json => setOptions(json.element.options))
        }
    }

    function changeItem(value) {
        setItem(value)
        const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
            }
        fetch(backUrl + "uniqueItem/" + props.character.id + "/" + props.element.id + "/" + value, requestOptions)
    }

    function itemDropdown() {
        let options = [<option value="0">- - -</option>]
        for(let i=0; i<possibleItems.length; i++) {
            options.push(
                <option value={possibleItems[i].id}>
                    {possibleItems[i].name}
                </option>
            )
        }

        return(
            <select class="form-select select-dropdown my-1 square-3-nd" 
                    value={item.id} 
                    onChange={event => changeItem(event.target.value)}>
                {options}
            </select>
        )
    }

    function treatPosition() {
        switch(options.position) {
            case "TOP":
                return(
                    <div class="d-flex flex-column align-items-center m-2">
                        {props.element.label}
                        {itemDropdown()}
                    </div>
                )
            case "LEFT":
                return(
                    <div class="d-flex flex-row align-items-center m-2">
                        {props.element.label}
                        {itemDropdown()}
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