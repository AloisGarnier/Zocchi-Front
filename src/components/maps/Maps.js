import React, { useContext } from "react"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 
import Map from "./Map.js"

export default function Maps(props) {

    const {domain, language, changeLanguage, user, changeUser} = useContext(ThemeContext)

    return(
        <div class="card border-primary mb-3">
            <Map/>
        </div>
    )
}