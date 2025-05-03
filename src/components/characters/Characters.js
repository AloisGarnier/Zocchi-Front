import React, { useContext, useState, useEffect } from "react"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 
import { DndContext } from "@dnd-kit/core";
import SheetPortion from "./SheetPortion.js";
import Label from "./Label.js";
import Trash from "./Trash.js";

export default function Characters(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const [height, setHeight] = useState(15)
    const [width, setWidth] = useState(10)

    const [selected, setSelected] = useState(null)
    const [labels, setLabels] = useState([])

    const sheetUrl = domain + "sheet/"

    useEffect(() => fetchLabels(), [])
    useEffect(() => fetchLabels(), [campaign])

    function fetchLabels() {
        if(campaign) {
            fetch(sheetUrl + campaign.id)
                .then(response => response.json())
                .then(json => setLabels(json))
        }
    }

    function modifyItem(selected, over) {
        if(selected) {
            let x, y, type, value, id, name
            if(over) {
                x = parseInt(over.id.split(":")[1]) + "/"
                y = parseInt(over.id.split(":")[0]) + "/"
                type = selected.type + "/"
                value = selected.value != "" ? selected.value : "empty"
                id = selected.id + "/"
                name = null + "/"
            } else {
                x = selected.x + "/"
                y = selected.y + "/"
                type = selected.type + "/"
                value = selected.value != "" ? selected.value : "empty"
                id = selected.id + "/"
                name = null + "/"
            }

            if(selected == "newLabel") {
                type = "label/"
                value = "empty/"
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                }
                fetch(sheetUrl + "add/" + type + x + y + name + value + campaign.templateId, requestOptions)
                    .then(() => fetchLabels())
            } else {
                const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                }
                fetch(sheetUrl + "modify/" + type + id + x + y + name + value, requestOptions)
                    .then(() => fetchLabels())
            }
        }
    }

    function handleDragEnd({over}) {
        modifyItem(selected, over)
    }

    function getTileWidth(x, y) {
        for(let i=0; i<labels.length; i++) {
            if(labels[i].x == x && labels[i].y == y) {
                return 3
            }
        }
    }

    function getTileContent(x, y) {
        for(let i=0; i<labels.length; i++) {
            if(labels[i].x == x && labels[i].y == y) {
                return <Label
                    x={x}
                    y={y}
                    id={labels[i].id}
                    value={labels[i].value}
                    onClick={() => setSelected(labels[i])} 
                    onChange={modifyItem}/>
            }
        }
    }

    function displayTiles() {
        let tiles = []
        for(let i=0; i<height; i++) {
            let tileLine = []
            for(let j=0; j<width; j++) {
                tileLine.push(
                    <SheetPortion id={i+":"+j}>
                        <div class={"d-flex align-items-center justify-content-center square" + (getTileWidth(j, i) ? "-3" : "")}>
                            {getTileContent(j, i)}
                        </div>
                    </SheetPortion>
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
            <div class="d-flex flex-column">
                {tiles}
            </div>
        )
    }
  
    return (
        <DndContext onDragEnd={handleDragEnd}>
            {displayTiles()}
            <Label id="newLabel" onClick={() => setSelected("newLabel")} onChange={() => true}/>
            <Trash id="trash"/>
        </DndContext>
    )

}