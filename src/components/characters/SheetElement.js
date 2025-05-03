import React, { useContext } from "react"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 

import { useDraggable } from "@dnd-kit/core"
import {CSS} from '@dnd-kit/utilities';

export default function SheetElement(props) {

    //const {domain, language, changeLanguage, user, changeUser} = useContext(ThemeContext)

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.id,
    })

    const style = {
        // Outputs `translate3d(x, y, 0)`
        transform: CSS.Translate.toString(transform),
      }
    
    return (
        <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </button>
    )
}