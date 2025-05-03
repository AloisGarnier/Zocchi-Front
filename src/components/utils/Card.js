import React, { useContext } from "react"
import { ThemeContext } from "../utils/context";

import * as text from "../utils/text.js" 

export default function Card(props) {

    const {domain, language, changeLanguage, user, changeUser} = useContext(ThemeContext)

    return(
        <div class="card border-primary my-3 pres-text">
            <div class="card-body">
                <div class="card text-white bg-primary mb-3">
                    <h2 class="card-header">{text.displayText(props.header, language)}</h2>
                    <div class="card-body d-flex flex-column">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )

}