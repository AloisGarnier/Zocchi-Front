import React, { useContext } from "react"
import { ThemeContext } from "../../utils/context.js"

import * as text from "../../utils/text.js" 

/**
 * 
 * @param {*} props actionOnChange, element
 * @returns 
 */
export default function NumFieldDisplay(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    return(
        <div class="d-flex flex-column align-items-center m-2">
            {props.element.label}
            <input class="form-control numfield" />
        </div>
    )
}