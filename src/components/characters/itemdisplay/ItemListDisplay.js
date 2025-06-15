import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../utils/context.js"

import * as text from "../../utils/text.js"
import Table from "../../utils/Table.js"

/**
 * 
 * @param {*} props actionOnChange, element
 * @returns 
 */
export default function ItemListDisplay(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const backUrl = domain + 'charsheet/'
    const itemUrl = domain + 'items/'

    const [newItem, setNewItem] = useState("")
    const [items, setItems] = useState([])
    const [category, setCategory] = useState("")
    const [options, setOptions] = useState({})

    useEffect(() => fetchItems(), [])
    useEffect(() => fetchPossibleItems(), [])
    useEffect(() => fetchOptions(), [])

    function fetchItems() {
        if(props.character && props.element) {
            fetch(backUrl + "items/" + props.character.id + "/" + props.element.id)
                .then(response => response.json())
                .then(json => setItems(json))
        }
    }

    function fetchPossibleItems() {
        if(props.element) {
            fetch(itemUrl + "categoryBySheetElement/" + props.element.id)
                .then(response => response.json())
                .then(json => setCategory(json))
        }
    }

    function fetchOptions() {
        if(props.character && props.element) {
            fetch(backUrl + "getValues/" + props.character.id + "/" + props.element.id + "/" )
                .then(response => response.json())
                .then(json => setOptions(json.element.options))
        }
    }

    function addItem(value) {
        setItems(table => table.push(value))
        const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
            }
        fetch(backUrl + "newItem/" + props.character.id + "/" + props.element.id + "/" + value, requestOptions)
            .then(() => fetchItems())
    }

    function tableHeading() {
        let dh = [<strong>{category.name}</strong>]
        if(category.categoryFields && category.categoryFields.length > 0) {
            for(let i=0; i<category.categoryFields.length; i++) {
                let field = category.categoryFields[i]
                dh.push(field.name)
            }
        }
        return dh
    }

    function tableData() {
        let dd = []
        if(items) {
            for(let i=0; i<items.length; i++) {
                let item = items[i]
                let dditem = []
                dditem.push(item.name)
                for(let j=0; j<item.fields.length; j++) {
                    dditem.push(item.fields[j].value)
                }
                dd.push(dditem)
            }
        }

        // Add new item
        let options = [<option value="0">- - -</option>]
        for(let i=0; i<category.items.length; i++) {
            options.push(
                <option value={category.items[i].id}>
                    {category.items[i].name}
                </option>
            )
        }
        let ddnew = [<select class="form-select sm-select" 
                            value={newItem.id} 
                            onChange={event => addItem(event.target.value)}>
                        {options}
                    </select>]
        for(let i=0; i<category.categoryFields.length; i++) {
            ddnew.push("")
        }
        dd.push(ddnew)
        return dd
    }

    function treatPosition() {
        switch(options.position) {
            case "TOP":
                return(
                    <div class="d-flex flex-column align-items-center m-2">
                        {props.element.label}
                        <Table heading={tableHeading()} data={tableData()}/>
                    </div>
                )
            case "LEFT":
                return(
                    <div class="d-flex flex-row align-items-center m-2">
                        {props.element.label}
                        <Table heading={tableHeading()} data={tableData()}/>
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