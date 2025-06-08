import React, { useContext } from "react"
import { ThemeContext } from "../../../utils/context.js"

import * as text from "../../../utils/text.js" 

/**
 * 
 * @param {*} props title, options
 * @returns 
 */
export default function OptionRadio(props) {

    const {domain, language, changeLanguage, user, changeUser} = useContext(ThemeContext)

    function displayOptions() {
        if(props.options) {
            let opts = []
            for(let i=0; i<props.options.length; i++) {
                let opt = props.options[i]
                opts.push(
                    <div class="form-check mx-1">
                        <input class="form-check-input" type="radio" name={props.title} id="optionsRadios1" value="option1"/>
                        <label class="form-check-label" for="optionsRadios1">
                            {text.displayText(opt, language)}
                        </label>
                    </div>
                )
            }
            return(
                <div class="d-flex flex-row">
                    {opts}
                </div>
            )
        }
    }

    return(
        <fieldset class="d-flex flex-row my-2 justify-content-between">
            {text.displayText(props.title, language) + " :"}
            {displayOptions()}
        </fieldset>
    )
}