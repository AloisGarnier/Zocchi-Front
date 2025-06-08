import React, { useContext } from "react"
import { ThemeContext } from "../../utils/context.js"

import * as text from "../../utils/text.js" 

/**
 * 
 * @param {*} props actionOnChange, element
 * @returns 
 */
export default function LabelDisplay(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    return(
        <p>{props.element.label}</p>
    )
}