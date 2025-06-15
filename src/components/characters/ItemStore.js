import React, { useContext } from "react"
import { ThemeContext } from "../utils/context.js"
import Label from "./itemcreate/Label.js"

import * as text from "../utils/text.js" 
import NumField from "./itemcreate/Numfield.js"
import NumFieldBonus from "./itemcreate/Numfieldbonus.js"
import TextField from "./itemcreate/TextField.js"
import NumFieldOver from "./itemcreate/NumFieldOver.js"
import SimpleList from "./itemcreate/SimpleList.js"
import Formula from "./itemcreate/Formula.js"
import ItemList from "./itemcreate/ItemList.js"
import LargeTextField from "./itemcreate/LargeTextField.js"


export default function ItemStore(props) {

    const {domain, language, changeLanguage, user, changeUser} = useContext(ThemeContext)
    
    return (
        <div class="card border-primary mb-3 store">
            <div class="card-body">
                <h4 class="card-title">{text.displayText('elements', language)}</h4>
                <div class="d-flex flex-column">
                    <div class="d-flex flex-row justify-content-around my-2">
                        <Label id="newLabel" onClick={props.onClick} onChange={() => true} label={null}/>
                        <TextField id="newTextField" onClick={props.onClick} onChange={() => true} label={null}/>
                        <SimpleList id="newSimpleList" onClick={props.onClick} onChange={() => true} label={null}/>
                    </div>
                    <div class="d-flex flex-row justify-content-around my-2">
                        <NumField id="newNumField" onClick={props.onClick} onChange={() => true} label={null}/>
                        <NumFieldBonus id="newNumFieldBonus" onClick={props.onClick} onChange={() => true} label={null}/>
                        <NumFieldOver id="newNumFieldOver" onClick={props.onClick} onChange={() => true} label={null}/>
                        <Formula id="newForumla" onClick={props.onClick} onChange={() => true} label={null}/>
                    </div>
                    <div class="d-flex flex-row justify-content-around my-2">
                        <ItemList id="newItemList" onClick={props.onClick} onChange={() => true} label={null}/>
                        <LargeTextField id="newLargeTextField" onClick={props.onClick} onChange={() => true} label={null} />
                    </div>
                </div>
            </div>
        </div>
    )
}