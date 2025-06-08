import React, { useContext } from "react"
import { ThemeContext } from "../../utils/context.js"

import * as text from "../../utils/text.js" 

import { useDraggable } from "@dnd-kit/core"
import {CSS} from '@dnd-kit/utilities';

export default function ItemList(props) {

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
            props.onChange({x:props.label.x, y:props.label.y, id:props.label.id, type:"itemlist", label:newValue}, null)
        }
    }

    function click() {
        props.onClick(
            {
               type:"itemlist",
               value:"",
               height:2,
               length:3,
               id:"newItemList"     
            }
        )
    }
    
    function className() {
        return "form-control my-textfield my-icontable" + (props.isSelected ? " blue" : " black")
    }
    
    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <div class="d-flex flex-row">
                <input 
                    type="text"
                    title={text.displayText('itemlist', language)} 
                    class={className()}
                    onMouseDown={() => click()} 
                    value={text.displayText('itemlist', language)}> 
                </input>
                <input 
                    type="text"
                    title={text.displayText('itemlist', language)} 
                    class={className()}
                    onMouseDown={() => click()} 
                    value={text.displayText('itemlist', language)}> 
                </input>
                <input 
                    type="text"
                    title={text.displayText('itemlist', language)} 
                    class={className()}
                    onMouseDown={() => click()} 
                    value={text.displayText('itemlist', language)}> 
                </input>
            </div>
            <div class="d-flex flex-row">
                <input 
                    type="text"
                    title={text.displayText('itemlist', language)} 
                    class={className()}
                    onMouseDown={() => click()} 
                    value={text.displayText('itemlist', language)}> 
                </input>
                <input 
                    type="text"
                    title={text.displayText('itemlist', language)} 
                    class={className()}
                    onMouseDown={() => click()} 
                    value={text.displayText('itemlist', language)}> 
                </input>
                <input 
                    type="text"
                    title={text.displayText('itemlist', language)} 
                    class={className()}
                    onMouseDown={() => click()} 
                    value={text.displayText('itemlist', language)}> 
                </input>
            </div>
        </div>
    )
}