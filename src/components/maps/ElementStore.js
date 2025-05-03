import React, { useContext, useState, useEffect } from "react"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 
import MapPortion from "./MapPortion.js";
import { DndContext } from "@dnd-kit/core";
import MapElement from "./MapElement.js";

export default function ElementStore(props) {

    const {domain, language, changeLanguage, user, changeUser} = useContext(ThemeContext)
}