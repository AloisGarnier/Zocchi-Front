import React, { useContext } from "react"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 

import { useDraggable } from "@dnd-kit/core"
import {CSS} from '@dnd-kit/utilities';

export default function Label(props) {

    //const {domain, language, changeLanguage, user, changeUser} = useContext(ThemeContext)

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.id,
    })

    const style = {
        // Outputs `translate3d(x, y, 0)`
        transform: CSS.Translate.toString(transform),
    }

    function actionOnChange(newValue) {
       props.onChange({x:props.x, y:props.y, id:props.id, name:null, type:"label", value:newValue}, null)
    }
    
    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <input 
                type="text" 
                class="form-control" 
                id="inputDefault" 
                onMouseDown={props.onClick} 
                onChange={event => actionOnChange(event.target.value)}
                value={props.value ?? "Texte fixe"}/>
        </div>
    )
}