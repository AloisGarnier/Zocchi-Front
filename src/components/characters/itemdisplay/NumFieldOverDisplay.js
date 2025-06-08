import React, { useContext } from "react"
import { ThemeContext } from "../../utils/context.js"

import * as text from "../../utils/text.js" 

/**
 * 
 * @param {*} props actionOnChange, element
 * @returns 
 */
export default function NumFieldOverDisplay(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    return(
        <div class="d-flex flex-row align-items-center">
            {props.element.label}
            <input class="form-control numfield" />
            <div class="mx-1">/</div>
            <input class="form-control numfield" />
        </div>
    )
}