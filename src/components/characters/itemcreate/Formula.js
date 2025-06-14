import React, { useContext } from "react"
import { ThemeContext } from "../../utils/context.js"

import * as text from "../../utils/text.js" 

import { useDraggable } from "@dnd-kit/core"
import {CSS} from '@dnd-kit/utilities';

export default function Formula(props) {

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
            props.onChange({x:props.label.x, y:props.label.y, id:props.label.id, type:"formula", label:newValue}, null)
        }
    }

    function click() {
        props.onClick(
            {
               type:"formula",
               value:"",
               height:1,
               length:1,
               id:"newFormula"     
            }
        )
    }

    function className() {
        return "form-control numfield" + (props.isSelected ? " blue" : "")
    }
    
    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <input 
                type="text"
                title={text.displayText('formulatooltip', language)} 
                class={className()}
                id="inputDefault" 
                onMouseDown={() => click()} 
                onChange={event => actionOnChange(event.target.value)}
                value="X"/>
        </div>
    )
}