import React, { useContext } from "react"
import { ThemeContext } from "../../utils/context.js"

import * as text from "../../utils/text.js" 

import { useDraggable } from "@dnd-kit/core"
import {CSS} from '@dnd-kit/utilities';

export default function NumFieldBonus(props) {

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
            props.onChange({x:props.label.x, y:props.label.y, id:props.label.id, type:"numfieldbonus", label:newValue}, null)
        }
    }

    function click() {
        props.onClick(
            {
               type:"numfieldbonus",
               value:"",
               height:1,
               length:1,
               id:"newNumFieldBonus"     
            }
        )
    }

    function className() {
        return "form-control numfield" + (props.isSelected ? " blue" : "")
    }

    function classNameTiny() {
        return "form-control tiny-input" + (props.isSelected ? " blue" : "")
    }
    
    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <div class="d-flex flex-column align-items-center">
                <input 
                    type="text"
                    title={text.displayText('numfieldbonustooltip', language)} 
                    class={className()}
                    id="inputDefault" 
                    onMouseDown={() => click()} 
                    onChange={event => actionOnChange(event.target.value)}
                    value="N"/>
                <input 
                    type="text"
                    class={classNameTiny()}
                    value="+n"
                    id="inputDefault2"/>   
            </div>   
        </div>
    )
}