import React, { useContext } from "react"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 
import { useDroppable } from "@dnd-kit/core";

export default function MapPortion(props) {

    const {domain, language, changeLanguage, user, changeUser} = useContext(ThemeContext)

    const {isOver, setNodeRef} = useDroppable({
        id: props.id,
      })
    
    return (
    <div ref={setNodeRef}>
        {props.children}
    </div>
    )
}