import React, { useContext } from "react"
import { ThemeContext } from "../../utils/context.js"

import * as text from "../../utils/text.js" 
import OptionRadio from "./utils/OptionRadio.js"

/**
 * 
 * @param {*} props actionOnChange, selected.label
 * @returns 
 */
export default function NumFieldOverDetails(props) {

    const {domain, language, changeLanguage, user, changeUser} = useContext(ThemeContext)

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
            <OptionRadio 
                title="nameposition"
                options={["top", "left"]}
            />
            <OptionRadio 
                title="visibility"
                options={["onlyme", "playertoo", "everybody"]}
            />
        </div>
    )
}