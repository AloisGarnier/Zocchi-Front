import React, { useContext, useState, useEffect } from "react"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 
import Table from "../utils/Table.js"
import WritableItemField from "./WritableItemField.js"

/**
 * 
 * @param {*} props cat
 * @returns 
 */
export default function Category(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const backUrl = domain + 'items/'

    const [newCatField, setNewCatField] = useState("")
    const [newItem, setNewItem] = useState("")

    function addNewCatField() {
        const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            }
            fetch(backUrl + "newCategoryField/" + props.cat.id + "/" + newCatField, requestOptions)
                .then(() => props.setHasChanged(b => !b))
                .then(setNewCatField(""))
    }

    function addNewItem() {
        const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            }
            fetch(backUrl + "newItem/" + props.cat.id + "/" + newItem, requestOptions)
                .then(() => props.setHasChanged(b => !b))
                .then(setNewItem(""))
    }

    function displayHeading() {
        let dh = [<strong>{props.cat.name}</strong>]
        if(props.cat.categoryFields && props.cat.categoryFields.length > 0) {
            for(let i=0; i<props.cat.categoryFields.length; i++) {
                let field = props.cat.categoryFields[i]
                dh.push(field.name)
            }
        }
        return dh
    }

    function displayData() {
        let dd = []
        if(props.cat.items) {
            for(let i=0; i<props.cat.items.length; i++) {
                let item = props.cat.items[i]
                let dditem = []
                dditem.push(item.name)
                for(let j=0; j<item.fields.length; j++) {
                    dditem.push(item.fields[j].value)
                }
                dd.push(dditem)
            }
        }
        return dd
    }

    function displayHeadingDM() {
        let dh = [<strong>{props.cat.name}</strong>]
        if(props.cat.categoryFields && props.cat.categoryFields.length > 0) {
            for(let i=0; i<props.cat.categoryFields.length; i++) {
                let field = props.cat.categoryFields[i]
                dh.push(field.name)
            }
        }
        dh.push(
            <div class="d-flex flex-row form-floating">
                <input class="form-label sm-input" id="floatingInput" value={newCatField} onChange={event => setNewCatField(event.target.value)}/>
                <a type='button' class="btn btn-success sm-btn" onClick={() => addNewCatField()}>+</a>
            </div>
        )
        return dh
    }

    function displayDataDM() {
        let dd = []
        if(props.cat.items) {
            for(let i=0; i<props.cat.items.length; i++) {
                let item = props.cat.items[i]
                let dditem = []
                dditem.push(item.name)
                for(let j=0; j<item.fields.length; j++) {
                    let field = item.fields[j]
                    dditem.push(<WritableItemField 
                                    field={field}
                                />)
                }
                dditem.push("")
                dd.push(dditem)
            }
        }
        let newItemDisplay = []
        newItemDisplay.push(
            <div class="d-flex flex-row form-floating">
                <input class="form-label sm-input" value={newItem} onChange={event => setNewItem(event.target.value)}/>
                <a type='button' class="btn btn-success sm-btn" onClick={() => addNewItem()}>+</a>
            </div>
        )
        for(let i=0; i<=props.cat.categoryFields.length; i++) {
            newItemDisplay.push("")
        }
        dd.push(newItemDisplay)
        return dd
    }

    if(!campaign.characterName) {
        return(
            <Table 
                heading={displayHeadingDM()}
                data={displayDataDM()}
            />
        )
    }

    return(
        <Table 
            heading={displayHeading()}
            data={displayData()}
        />
    )
}