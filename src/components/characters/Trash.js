import React, { useContext } from "react"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 
import { useDroppable } from "@dnd-kit/core";

export default function Trash(props) {

    const {domain, language, changeLanguage, user, changeUser} = useContext(ThemeContext)

    const {isOver, setNodeRef} = useDroppable({
        id: props.id,
      })
    
    return (
    <div ref={setNodeRef}>
        <i class="fa-duotone fa-solid fa-trash-xmark"></i>
    </div>
    )
}