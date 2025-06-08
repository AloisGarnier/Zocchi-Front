import React, { useContext, useState, useEffect } from "react"
import TemplateCreation from "./TemplateCreation"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 
import NumFieldDisplay from "./itemdisplay/NumFieldDisplay.js"
import LabelDisplay from "./itemdisplay/LabelDisplay.js"
import NumFieldBonusDisplay from "./itemdisplay/NumFieldBonusDisplay.js"
import NumFieldOverDisplay from "./itemdisplay/NumFieldOverDisplay.js"
import FormulaDisplay from "./itemdisplay/FormulaDisplay.js"
import TextFieldDisplay from "./itemdisplay/TextFieldDisplay.js"
import LargeTextFieldDisplay from "./itemdisplay/LargeTextFieldDisplay.js"
import SimpleListDisplay from "./itemdisplay/SimpleListDisplay.js"

export default function CharacterSheet(props) {

    const [height, setHeight] = useState(15)
    const [width, setWidth] = useState(10)

    function getTileWidth(x, y) {
        let fields = props.sheet.fields
        for(let i=0; i<fields.length; i++) {
            let field = fields[i]
            let element = field.element
            if(element.x == x && element.y == y) {
                return element.length
            }
        }
    }

    function getTileContent(x, y) {
        let fields = props.sheet.fields
        for(let i=0; i<fields.length; i++) {
            let field = fields[i]
            let element = field.element
            if(element.x == x && element.y == y) {
                switch(element.type) {
                    case "label":
                        return <LabelDisplay element={element}/>
                    case "numfield":
                        return <NumFieldDisplay element={element}/>
                    case "numfieldbonus":
                        return <NumFieldBonusDisplay element={element}/>
                    case "numfieldover":
                        return <NumFieldOverDisplay element={element}/>
                    case "formula":
                        return <FormulaDisplay element={element}/>
                    case "textfield":
                        return <TextFieldDisplay character={props.sheet} element={element}/>
                    case "largetextfield":
                        return <LargeTextFieldDisplay element={element}/>
                    case "simplelist":
                        return <SimpleListDisplay element={element}/>
                    case "itemlist":
                    default:
                        break
                }
            }
        }
    }

    function displayTiles() {
        let tiles = []
        for(let i=0; i<height; i++) {
            let tileLine = []
            for(let j=0; j<width; j++) {
                tileLine.push(
                    <div class="d-flex align-items-center justify-content-center min-hw">
                        {getTileContent(j, i)}
                    </div>
                )
                if(getTileContent(j, i)) {
                    j=j+getTileWidth(j, i)-1
                }
            }
            tiles.push(
                <div class="d-flex flex-row">
                    {tileLine}
                </div>
            )
        }
        return(
            <div class="d-flex flex-column mx-3">
                {tiles}
            </div>
        )
    }

    return(
        <div class="card border-primary mb-3">
            <div class="card-body">
                {displayTiles()}
            </div>
        </div>
    )
}