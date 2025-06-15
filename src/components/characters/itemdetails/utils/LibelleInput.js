import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../../utils/context.js"

import * as text from "../../../utils/text.js" 

/**
 * 
 * @param {*} props actionOnChange, selected.label
 * @returns 
 */
export default function LibelleInput(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    return(
        <div class="d-flex flex-row justify-content-between align-items-center">
            {text.displayText('fieldname', language) + " :"}
            <input 
                type="text" 
                class="form-control square-3-nd" 
                id="inputDefault" 
                onChange={event => props.actionOnChange(event.target.value)}
                value={props.selected.label}/>
        </div>
    )
}