import React, { useContext } from "react"
import { ThemeContext } from "../../utils/context.js"

import * as text from "../../utils/text.js" 
import OptionRadio from "./utils/OptionRadio.js"

/**
 * 
 * @param {*} props actionOnChange, selected.label
 * @returns 
 */
export default function LabelDetails(props) {

    const {domain, language, changeLanguage, user, changeUser} = useContext(ThemeContext)

    return(
        <div class="d-flex flex-column">
            <div class="d-flex flex-row justify-content-between align-items-center">
                {text.displayText('label', language) + " :"}
                <input 
                    type="text" 
                    class="form-control square-3-nd" 
                    id="inputDefault" 
                    onChange={event => props.actionOnChange(event.target.value)}
                    value={props.selected.label}/>
            </div>
            <OptionRadio 
                title="size"
                options={["small", "medium", "large"]}
                selected={props.selected}
            />
            <OptionRadio 
                title="position"
                options={["left", "center", "right"]}
                selected={props.selected}
            />
            <OptionRadio 
                title="visibility"
                options={["gamemasteronly", "gamemasterandplayer", "everybody"]}
                selected={props.selected}
            />
        </div>
    )
}