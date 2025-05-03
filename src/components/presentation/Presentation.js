import React, { useContext } from "react";

import * as text from "../utils/text.js" 
import { ThemeContext } from "../utils/context.js";
import Card from "../utils/Card.js";

export default function Presentation(props) {

    const {domain, language, changeLanguage, user, setUser} = useContext(ThemeContext)

    return(
        <Card header='welcome'>
            <p class="card-text">{text.displayText('presentation', language)}</p>
            <p class="card-text">&emsp;<i class="fa-solid fa-helmet-battle"></i>&emsp;{text.displayText('createchar', language)}</p>
            <p class="card-text">&emsp;<i class="fa-solid fa-dragon"></i>&emsp;{text.displayText('foes', language)}</p>
            <p class="card-text">&emsp;<i class="fa-solid fa-scroll-old"></i>&emsp;{text.displayText('createevent', language)}</p>
            <p class="card-text">&emsp;<i class="fa-solid fa-treasure-chest"></i>&emsp;{text.displayText('objects', language)}</p>
            <p class="card-text">&emsp;<i class="fa-solid fa-sword"></i>&emsp;{text.displayText('fight', language)}</p>
            <p class="card-text">&emsp;<i class="fa-solid fa-signs-post"></i>&emsp;{text.displayText('maps', language)}</p>
            <p class="card-text">&emsp;{text.displayText('other', language)}</p>
            <div class="d-flex flex-row justify-content-around">
                <div class="d-flex flex-column opt-text">
                    {text.displayText('becomedm', language)}
                    <button type='button' class="my-2 mx-5 btn btn-success" onClick={() => {language == 'fr' ? changeLanguage('en') : changeLanguage('fr')}}>
                        {text.displayText('create', language)}
                    </button>
                </div>
                <div class="d-flex flex-column opt-text">
                    {text.displayText('joincampaign', language)}
                    <button type='button' class="my-2 mx-5 btn btn-info" onClick={() => {language == 'fr' ? changeLanguage('en') : changeLanguage('fr')}}>
                        {text.displayText('join', language)}
                    </button>
                </div>
                <div class="d-flex flex-column opt-text">
                    {text.displayText('infopricing', language)}
                    <button type='button' class="my-2 mx-5 btn btn-danger" onClick={() => {language == 'fr' ? changeLanguage('en') : changeLanguage('fr')}}>
                        {text.displayText('pricing', language)}
                    </button>
                </div>
            </div>
        </Card>
                        
    )
    
}