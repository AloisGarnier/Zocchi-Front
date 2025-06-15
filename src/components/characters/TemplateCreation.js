import React, { useContext, useState, useEffect } from "react"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 
import { DndContext } from "@dnd-kit/core"
import SheetPortion from "./SheetPortion.js"
import Trash from "./Trash.js"
import ItemStore from "./ItemStore.js"
import ItemDetails from "./ItemDetails.js"

import Label from "./itemcreate/Label.js"
import NumField from "./itemcreate/Numfield.js"
import NumFieldBonus from "./itemcreate/Numfieldbonus.js"
import TextField from "./itemcreate/TextField.js"
import NumFieldOver from "./itemcreate/NumFieldOver.js"
import LargeTextField from "./itemcreate/LargeTextField.js"
import SimpleList from "./itemcreate/SimpleList.js"
import ItemList from "./itemcreate/ItemList.js"
import Formula from "./itemcreate/Formula.js"

export default function TemplateCreation(props) {

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
            // Delete
            if(over && over.id == "trash") {
                const requestOptions = {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                }
                fetch(sheetUrl + "delete/" + selected.id, requestOptions)
                    .then(() => fetchLabels())
                    .then(() => setSelected(null))
                return
            } 

            // Add, modify
            let x_num, y_num, x, y, type, value, id
            if(over) {
                x_num = parseInt(over.id.split(":")[1])
                y_num = parseInt(over.id.split(":")[0])
            } else {
                x_num = selected.x
                y_num = selected.y
            }
            setSelected({x:x_num, y:y_num, id:selected.id, type:selected.type, label:selected.label, options:selected.options})
            x = x_num + "/"
            y = y_num + "/"
            type = selected.type + "/"
            value = selected.label != "" ? selected.label : "empty"
            id = selected.id + "/"

            // Si le label dépasse de la taille de la feuille, décaler à gauche
            if(x_num + selected.length > width) {
                x_num -= (x_num + selected.length - width)
                x = x_num + "/"
            }

            if(selected.id.toString().includes("new")) {
                type = selected.id.toString().substring(3).toLowerCase() + "/"
                value = "empty/"
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({visibility: "EVERYBODY", 
                        editability: "EVERYBODY", 
                        size: "MEDIUM",
                        position: (type == "label/" ? "LEFT" : "TOP"),
                        bonusposition: "BOTTOM"})
                }
                fetch(sheetUrl + "add/" + type + x + y + value + campaign.templateId, requestOptions)
                    .then(() => fetchLabels())
            } else {
                const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({})
                }
                fetch(sheetUrl + "modify/" + id + x + y + value, requestOptions)
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
                return labels[i].length
            }
        }
    }

    function getTileContent(x, y) {
        for(let i=0; i<labels.length; i++) {
            if(labels[i].x == x && labels[i].y == y) {
                switch(labels[i].type) {
                    case "label":
                        return <Label
                            id={x+":"+y}
                            label={labels[i]}
                            onClick={() => setSelected(labels[i])} 
                            onChange={modifyItem}
                            isSelected={selected && selected.x == x && selected.y == y}/>
                    case "numfield":
                        return <NumField
                            id={x+":"+y}
                            label={labels[i]}
                            onClick={() => setSelected(labels[i])} 
                            onChange={modifyItem}
                            isSelected={selected && selected.x == x && selected.y == y}/>
                    case "numfieldbonus":
                        return <NumFieldBonus
                            id={x+":"+y}
                            label={labels[i]}
                            onClick={() => setSelected(labels[i])} 
                            onChange={modifyItem}
                            isSelected={selected && selected.x == x && selected.y == y}/>
                    case "numfieldover":
                        return <NumFieldOver
                            id={x+":"+y}
                            label={labels[i]}
                            onClick={() => setSelected(labels[i])} 
                            onChange={modifyItem}
                            isSelected={selected && selected.x == x && selected.y == y}/>
                    case "formula":
                        return <Formula
                            id={x+":"+y}
                            label={labels[i]}
                            onClick={() => setSelected(labels[i])} 
                            onChange={modifyItem}
                            isSelected={selected && selected.x == x && selected.y == y}/>
                    case "textfield":
                        return <TextField
                            id={x+":"+y}
                            label={labels[i]}
                            onClick={() => setSelected(labels[i])} 
                            onChange={modifyItem}
                            isSelected={selected && selected.x == x && selected.y == y}/>
                    case "largetextfield":
                        return <LargeTextField
                            id={x+":"+y}
                            label={labels[i]}
                            onClick={() => setSelected(labels[i])} 
                            onChange={modifyItem}
                            isSelected={selected && selected.x == x && selected.y == y}/>
                    case "simplelist":
                        return <SimpleList
                            id={x+":"+y}
                            label={labels[i]}
                            onClick={() => setSelected(labels[i])} 
                            onChange={modifyItem}
                            isSelected={selected && selected.x == x && selected.y == y}/>
                    case "itemlist":
                        return <ItemList
                            id={x+":"+y}
                            label={labels[i]}
                            onClick={() => setSelected(labels[i])} 
                            onChange={modifyItem}
                            isSelected={selected && selected.x == x && selected.y == y}/>
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
                    <SheetPortion id={i+":"+j}>
                        <div class={"d-flex align-items-center justify-content-center square" + (getTileWidth(j, i) ? "-" + getTileWidth(j, i) : "")}>
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
            <div class="d-flex flex-column mx-3">
                {tiles}
            </div>
        )
    }
  
    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div class="d-flex flex-row">
                {displayTiles()}
                <div class="d-flex flex-column align-items-center mx-3">
                    <ItemDetails selected={selected} setSelected={setSelected} modifyItem={modifyItem}/>
                    <ItemStore onClick={setSelected} />
                    <Trash id="trash"/>
                </div>
            </div>
        </DndContext>
    )

}