import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../utils/context.js"

import * as text from "../../utils/text.js"

/**
 * 
 * @param {*} props actionOnChange, element
 * @returns 
 */
export default function TextFieldDisplay(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const backUrl = domain + 'charsheet/'

    const [value, setValue] = useState("")

    useEffect(() => fetchInitialValue(), [])

    function fetchInitialValue() {
        fetch(backUrl + "getValues/" + props.character.id + "/" + props.element.id + "/" )
            .then(response => response.json())
            .then(json => setValue(json.value))
    }

    function processValue(newValue) {
        const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
            }
        fetch(backUrl + "update/" + props.character.id + "/" + props.element.id + "/" + (newValue != "" ? newValue : "empty") + "/empty", requestOptions)
            .then(() => setValue(newValue))
    }

    return(
        <div class="d-flex flex-column align-items-center m-2">
            {props.element.label}
            <input class="form-control my-textfield" value={value} onChange={event => processValue(event.target.value)}/>
        </div>
    )
}