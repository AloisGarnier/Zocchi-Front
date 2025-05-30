import React, { useContext, useState, useEffect } from "react"
import TemplateCreation from "./TemplateCreation"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 

export default function CharacterSheet(props) {

    const [height, setHeight] = useState(15)
    const [width, setWidth] = useState(10)

    function numField(element) {
        return(
            <div class="d-flex flex-column align-items-center m-2">
                {element.label}
                <input class="form-control numfield" />
            </div>
        )
    }

    function getTileContent(x, y) {
        let fields = props.sheet.fields
        for(let i=0; i<fields.length; i++) {
            let field = fields[i]
            let element = field.element
            if(element.x == x && element.y == y) {
                switch(element.type) {
                    case "label":
                        return <p>{element.label}</p>
                    case "numfield":
                        return numField(element)
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