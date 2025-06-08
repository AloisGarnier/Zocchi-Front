import React, { useContext, useState, useEffect } from "react"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 
import Table from "../utils/Table.js"

/**
 * 
 * @param {*} props field
 * @returns 
 */
export default function WritableItemField(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const backUrl = domain + 'items/'

    const [value, setValue] = useState("")

    useEffect(() => fetchValue(), [])

    function fetchValue() {
        fetch(backUrl + "getItemField/" + props.field.id)
            .then(response => response.json())
            .then(json => setValue(json.value))
    }

    function changeValue(newValue) {
        setValue(newValue)
        const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
            }
        fetch(backUrl + "fillItemField/" + props.field.id + "/" + newValue, requestOptions)
    }

    return(
        <input class="form-label sm-input" value={value} onChange={event => changeValue(event.target.value)}/>
    )
}