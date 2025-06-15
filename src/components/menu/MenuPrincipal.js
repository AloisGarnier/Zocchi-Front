import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../utils/context.js"
import Dropdown from "react-bootstrap/Dropdown"

import icon from "../../img/icon.png"
import fr from "../../img/FR_flag_icon.png"
import en from "../../img/UK_flag_icon.png"

import * as text from "../utils/text.js" 

export default function MenuPrincipal(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const campaignUrl = domain + 'campaign/'

    const [campaigns, setCampaigns] = useState([])

    useEffect(() => fetchOwner(), [])
    useEffect(() => fetchCampaigns(), [user])
    useEffect(() => fetchCampaigns(), [campaign])

    function fetchOwner() {
        if(window.localStorage.getItem("user") && window.localStorage.getItem("user") != "undefined") {
            let savedUser = JSON.parse(window.localStorage.getItem("user"))
            changeUser(savedUser)
            fetchCampaigns()
            if(window.localStorage.getItem("campaign") && window.localStorage.getItem("campaign") != "undefined") {
                changeCampaign(JSON.parse(window.localStorage.getItem("campaign")))
            }
        }
    }

    function fetchCampaigns() {
        if(JSON.parse(window.localStorage.getItem("user"))) {
            fetch(campaignUrl + "byPlayer/" + JSON.parse(window.localStorage.getItem("user")).id)
                .then(response => response.json())
                .then(json => setCampaigns(json))
        }
    }

    const menuOptions = [
        {chemin : "/", nom : text.displayText('about', language)},
        {chemin : "/nouveautes", nom : text.displayText('news', language)},
        {chemin : "/aide", nom : text.displayText('help', language)},
        {chemin : "/legal", nom : text.displayText('mentionslegales', language)},
    ]

    const accountOptions = [
        {chemin : "/parametres", nom : text.displayText('accountparam', language)},
        {chemin : "divider", nom : ""},
        {chemin : "deconnexion", nom : text.displayText('deconnexion', language)},
    ]

    function afficherOptions() {
        let affichageOptions = []
        for(var i=0; i<menuOptions.length; i++) {
            affichageOptions.push(
                <li class="nav-item">
                    <a class="nav-link active" href={menuOptions[i].chemin}>
                        {menuOptions[i].nom}
                    </a>
                </li>
            )
        }
        return affichageOptions
    }

    function afficherAccountOptions() {
        let affichageAccount = []
        for(var i=0; i<accountOptions.length; i++) {
            if(accountOptions[i].chemin == "divider") {
                affichageAccount.push(
                    <Dropdown.Divider/>
                )
            } else if(accountOptions[i].chemin == "deconnexion") {
                affichageAccount.push(
                    <Dropdown.Item href="/" onClick={() => changeUser(null)}>{accountOptions[i].nom}</Dropdown.Item>
                )
            } else {
                affichageAccount.push(
                    <Dropdown.Item href={accountOptions[i].chemin}>{accountOptions[i].nom}</Dropdown.Item>
                )
            }
        }
        return affichageAccount
    }
    
    function displayCampaign(c) {
        return c.name + (c.characterName ? " ("+c.characterName+")": "")
    }

    function badges(c) {
        if(!c.characterName) {
            return <i class="fa-solid fa-scroll-old"></i>
        }
    }

    function afficherCampagnes() {
        let campaignDisplay = []
        if(user) {
            if(campaigns && typeof campaigns[Symbol.iterator] === 'function' && campaigns.length > 0) {
                for(let c of campaigns) {
                    if(campaign && c.code == campaign.code) {
                        campaignDisplay.push(<Dropdown.Item className="green" onClick={() => changeCampaign(c)}>{displayCampaign(c)} {badges(c)}</Dropdown.Item>)
                    } else {
                        campaignDisplay.push(<Dropdown.Item onClick={() => changeCampaign(c)}>{displayCampaign(c)} {badges(c)}</Dropdown.Item>)
                    }
                }
                campaignDisplay.push(<Dropdown.Divider/>)
            }
            campaignDisplay.push(<Dropdown.Item href="/nouvelle-campagne">{text.displayText('newcampaign', language)}</Dropdown.Item>)
            campaignDisplay.push(<Dropdown.Divider/>)
            campaignDisplay.push(<Dropdown.Item href="/rejoindre-campagne">{text.displayText('joincampaign', language)}</Dropdown.Item>)
            return(
                <Dropdown className="mx-3">
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {text.displayText('campaigns', language)}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {campaignDisplay}
                    </Dropdown.Menu>
                </Dropdown>
            )
        }
    }

    function afficherCompte() {
        if(user) {
            return(
                <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        {text.displayText('account', language)}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {afficherAccountOptions()}
                    </Dropdown.Menu>
                </Dropdown>
            )
        }

        return(
            <a type="button" class="btn btn-dark" href="/connexion">{text.displayText('connectioninscription', language)}</a>
        )
    }

    return(
        <nav class="navbar navbar-expand-lg bg-primary my-navbar" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img class="img-icon" src={icon}></img></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto">
                        {afficherOptions()}
                    </ul>
                    <form class="d-flex align-items-center">
                        {afficherCampagnes()}
                        {afficherCompte()}                        
                        <button type='button' class="mx-2 language-button" onClick={() => {language == 'fr' ? changeLanguage('en') : changeLanguage('fr')}}>
                            <img class="language-button" src={language == 'fr' ? en : fr}></img>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}