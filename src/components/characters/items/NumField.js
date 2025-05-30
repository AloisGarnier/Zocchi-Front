import React, { useContext } from "react"
import { ThemeContext } from "../../utils/context.js"

import * as text from "../../utils/text.js" 

import { useDraggable } from "@dnd-kit/core"
import {CSS} from '@dnd-kit/utilities';

export default function NumField(props) {

    const {domain, language, changeLanguage, user, changeUser} = useContext(ThemeContext)

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.id,
    })

    const style = {
        // Outputs `translate3d(x, y, 0)`
        transform: CSS.Translate.toString(transform),
    }

    function actionOnChange(newValue) {
        if(props.label) {
            props.onChange({x:props.label.x, y:props.label.y, id:props.label.id, type:"numfield", label:newValue}, null)
        }
    }

    function click() {
        props.onClick(
            {
               type:"numfield",
               value:"",
               height:1,
               length:1,
               id:"newNumField"     
            }
        )
    }
    
    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <input 
                type="text"
                title={text.displayText('numfieldtooltip', language)} 
                class="form-control numfield" 
                id="inputDefault" 
                onMouseDown={() => click()} 
                onChange={event => actionOnChange(event.target.value)}
                value="N"/>
        </div>
    )
}