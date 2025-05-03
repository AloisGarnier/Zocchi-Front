import React, { useContext, useState, useEffect } from "react"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 
import MapPortion from "./MapPortion.js";
import { DndContext } from "@dnd-kit/core";
import MapElement from "./MapElement.js";

export default function Map(props) {

    const {domain, language, changeLanguage, user, changeUser} = useContext(ThemeContext)

    const [size, setSize] = useState(10)
    const [grid, setGrid] = useState(true)
    const [parent, setParent] = useState(null)

    function handleDragEnd({over}) {
        setParent(over ? over.id : null)
    }

    function displayGrid() {
        return(
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked={grid} onClick={() => setGrid(!grid)}/>
                <label class="form-check-label" for="flexSwitchCheckChecked">Afficher le quadrillage</label>
            </div>
        )
    }

    function displayTiles() {
        let tiles = []
        for(let i=0; i<size; i++) {
            let tileLine = []
            for(let j=0; j<size; j++) {
                tileLine.push(
                    <MapPortion id={"droppable"+i+j}>
                        <div class={"d-flex align-items-center justify-content-center " + (grid ? "square" : "square-not-grid")}>
                            {parent === "droppable"+i+j ? 
                                <MapElement id="draggable">
                                    T
                                </MapElement> 
                                : <></>}
                        </div>
                    </MapPortion>
                )
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
            {displayGrid()}
            {displayTiles()}
            {!parent ? <MapElement id="draggable">
                                T
                            </MapElement>  : null}
        </DndContext>
    )

}