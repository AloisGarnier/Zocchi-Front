import React, { useContext, useState, useEffect } from "react"
import { ThemeContext } from "../../../utils/context.js"

import * as text from "../../../utils/text.js" 

/**
 * 
 * @param {*} props title, options, selected
 * @returns 
 */
export default function OptionRadio(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const backUrl = domain + 'sheet/'

    const [choice, setChoice] = useState("")

    useEffect(() => processChoice(), [])
    useEffect(() => processChoice(), [props.selected])

    function putChoice(json) {
        switch(props.title) {
            case "size":
                setChoice(json.size)
                break
            case "position":
                setChoice(json.position)
                break
            case "visibility":
                setChoice(json.visibility)
                break
            default:
                break
        }
    }

    function processChoice() {
        fetch(backUrl + "opt/" + props.selected.id)
            .then(response => response.json())
            .then(json => putChoice(json))
    }

    function getJSON(value) {
        switch(props.title) {
            case "size":
                return {size: value}
            case "position":
                return {position: value}
            case "visibility":
                return {visibility : value}
            default:
                break
        }
    }

    function click(value) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(getJSON(value))
        }
        fetch(backUrl + "options/" + props.selected.id, requestOptions)
            .then(() => processChoice())
    }

    function displayOptions() {
        if(props.options) {
            let opts = []
            for(let i=0; i<props.options.length; i++) {
                let opt = props.options[i]
                opts.push(
                    <div class="form-check mx-1">
                        <input class="form-check-input" 
                                type="radio" 
                                name={props.title}
                                id={props.title}
                                value={opt}
                                checked={choice != null ? choice.toLowerCase() == opt : false}
                                onClick={event => click(event.target.value)}/>
                        <label class="form-check-label" for={props.title}>
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