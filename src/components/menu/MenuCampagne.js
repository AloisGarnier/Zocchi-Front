import React, { useContext } from "react"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 

export default function MenuCampagne(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const menuOptions = [
        {chemin : "/personnages", icone : "fa-duotone fa-solid fa-images-user", nom : text.displayText('char', language)},
        {chemin : "/index", icone : "fa-duotone fa-solid fa-scroll-old", nom : text.displayText('index', language)},
        {chemin : "/lieux", icone : "fa-duotone fa-solid fa-globe-stand", nom : text.displayText('lieux', language)},
        {chemin : "/combat", icone : "fa-duotone fa-solid fa-swords", nom : text.displayText('combat', language)},
        {chemin : "/des", icone : "fa-duotone fa-solid fa-dice-d20", nom : text.displayText('dice', language)},
    ]

    function afficherOptions() {
        let affichageOptions = []
        let options = menuOptions
        for(var i = 0; i<options.length; i++) {
            affichageOptions.push(
                <li class="navbar__item">
                    <a href={options[i].chemin} class="navbar__link sm-width"><i class={options[i].icone}></i><span>{options[i].nom}</span></a>
                </li>
            )
        }
        if(!campaign.characterName) {
          affichageOptions.push(
                <li class="navbar__item">
                    <a href="/options" class="navbar__link sm-width"><i class="fa-duotone fa-solid fa-gears"></i><span>{text.displayText('options', language)}</span></a>
                </li>
            )  
        }
        return affichageOptions
    }

    if(!campaign) {
        return(
            <></>
        )
    }

    return(
        <nav class="navbar__global alert alert-secondary my-3">
            <ul class="navbar__menu">
                {afficherOptions()}
            </ul>
        </nav>
    )
}