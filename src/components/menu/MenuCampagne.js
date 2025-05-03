import React, { useContext } from "react"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 

export default function MenuCampagne(props) {

    const {domain, language, changeLanguage, user, changeUser} = useContext(ThemeContext)

    const menuOptions = [
        {chemin : "/personnages", icone : "fa-duotone fa-solid fa-helmet-battle", nom : text.displayText('char', language)},
        {chemin : "/evenements", icone : "fa-duotone fa-solid fa-scroll-old", nom : text.displayText('events', language)},
        {chemin : "/lieux", icone : "fa-duotone fa-solid fa-dungeon", nom : text.displayText('lieux', language)},
        {chemin : "/combat", icone : "fa-duotone fa-solid fa-swords", nom : text.displayText('combat', language)},
        {chemin : "/des", icone : "fa-duotone fa-solid fa-dice-d20", nom : text.displayText('dice', language)},
    ]

    function afficherOptions() {
        let affichageOptions = []
        let options = menuOptions
        for(var i = 0; i<options.length; i++) {
            affichageOptions.push(
                <li class="navbar__item">
                    <a href={options[i].chemin} class="navbar__link"><i class={options[i].icone}></i><span>{options[i].nom}</span></a>
                </li>
            )
        }
        return affichageOptions
    }

    if(!user) {
        return(
            <></>
        )
    }

    return(
        <nav class="navbar__global">
            <ul class="navbar__menu">
                {afficherOptions()}
            </ul>
        </nav>
    )
    
}