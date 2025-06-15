import React, { useContext } from "react"

import * as text from "../utils/text.js" 
import { ThemeContext } from "../utils/context.js"

import d4 from "../../img/d4.png"
import d6 from "../../img/d6.png"
import d8 from "../../img/d8.png"
import d10 from "../../img/d10.png"
import d12 from "../../img/d12.png"
import d20 from "../../img/d20.png"

export default function Presentation(props) {

    const {domain, language, changeLanguage, user, setUser, campaign, setCampaign} = useContext(ThemeContext)

    return(
        <div class="d-flex flex-column align-items-center my-3">
            <div class="pres-text my-2">{text.displayText('presentation', language)}</div>
            <div class="d-flex flex-row align-items-center my-2">
                <div class="d-flex flex-column align-items-center mx-3"><img class="dice" src={d4}></img>{text.displayText('createchar', language)}</div>
                <div class="d-flex flex-column align-items-center mx-3"><img class="dice" src={d6}></img>{text.displayText('foes', language)}</div>
            </div>
            <div class="d-flex flex-row align-items-center my-2">
                <div class="d-flex flex-column align-items-center mx-10"><img class="dice" src={d8}></img>{text.displayText('objects', language)}</div>
                <div class="d-flex flex-column align-items-center mx-10"><img class="dice" src={d10}></img>{text.displayText('maps', language)}</div>
            </div>
            <div class="d-flex flex-row align-items-center my-2">
                <div class="d-flex flex-column align-items-center mx-3"><img class="dice" src={d12}></img>{text.displayText('other', language)}</div>
                <div class="d-flex flex-column align-items-center mx-3"><img class="dice" src={d20}></img>{text.displayText('signupjoin', language)}</div>
            </div>
        </div>                
    )
    
}