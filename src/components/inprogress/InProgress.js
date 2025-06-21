import React, { useContext, useState } from "react"
import { ThemeContext } from "../utils/context";

import * as text from "../utils/text.js" 
import { useNavigate } from "react-router-dom";

import inprogress from "../../img/inprogress.png"

export default function InProgress(props) {

    const {domain, language, changeLanguage, user, changeUser} = useContext(ThemeContext)

    return(
        <div class="d-flex flex-column align-items-center">
            <img class="img-inprogress" src={inprogress}></img>
            <h2>{text.displayText('inprogress', language)}</h2>
        </div>
    )
}