import React from "react"
import * as cst from "../utils"

export default function MenuPrincipal(props) {

    function afficherOptions() {
        let affichageOptions = []
        let options = cst.menuOptions
        for(var i = 0; i<options.length; i++) {
            affichageOptions.push(
                <li class="navbar__item">
                    <a href={options[i].chemin} class="navbar__link"><i class={options[i].icone}></i><span>{options[i].nom}</span></a>
                </li>
            )
        }
        return affichageOptions
    }

    return(
        <nav class="navbar__global">
            <ul class="navbar__menu">
                {afficherOptions()}
            </ul>
        </nav>
    )
    

}