import React, { useContext } from "react"
import { ThemeContext } from "../utils/context";

import * as cst from "../utils"
import * as text from "../utils/text.js" 

export default function Characters(props) {

    const {domain, language, changeLanguage} = useContext(ThemeContext)

    return(
        <div class="d-flex flex-wrap justify-content-around w-100 h-100">
            {language}
            {text.displayText('title', language)}
        </div> 
    );
}