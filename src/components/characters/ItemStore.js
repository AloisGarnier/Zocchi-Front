import React, { useContext } from "react"
import { ThemeContext } from "../utils/context.js"
import Label from "./items/Label.js"

import * as text from "../utils/text.js" 
import NumField from "./items/Numfield.js"
import NumFieldBonus from "./items/Numfieldbonus.js"
import TextField from "./items/TextField.js"


export default function ItemStore(props) {

    const {domain, language, changeLanguage, user, changeUser} = useContext(ThemeContext)
    
    return (
        <div class="card border-primary mb-3 store">
            <div class="card-body">
                <h4 class="card-title">{text.displayText('elements', language)}</h4>
                <div class="d-flex flex-column">
                    <div class="d-flex flex-row justify-content-around my-2">
                        <Label id="newLabel" onClick={props.onClick} onChange={() => true} label={null}/>
                        <NumField id="newNumField" onClick={props.onClick} onChange={() => true} label={null}/>
                    </div>
                    <div class="d-flex flex-row justify-content-around">
                        <NumFieldBonus id="newNumFieldBonus" onClick={props.onClick} onChange={() => true} label={null}/>
                        <TextField id="newTextField" onClick={props.onClick} onChange={() => true} label={null}/>
                    </div>
                </div>
            </div>
        </div>
    )
}