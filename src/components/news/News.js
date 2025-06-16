import React from "react"
import { Helmet } from "react-helmet"

import d4 from "../../img/d4.png"
import d6 from "../../img/d6.png"
import d8 from "../../img/d8.png"
import d10 from "../../img/d10.png"
import d12 from "../../img/d12.png"
import d20 from "../../img/d20.png"

export default function News(props) {

    return(
        <>
            <div class="card my-card">
                <div class="card-body d-flex flex-row">
                    <img class="dice" src={d4}></img>
                    <div class="d-flex flex-column">
                        <h3>Version d4 (16 juin 2025)</h3>
                        <ul>
                            <li>Fonctionnalités de base pour les fiches de personnages</li>
                            <li>Fonctionnalités de base pour l'indexation des éléments</li>
                        </ul>
                    </div>
                </div>  
            </div>
        </>
    );

}