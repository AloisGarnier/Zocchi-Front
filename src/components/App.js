import React from "react"

import {Route, Routes, Navigate} from "react-router-dom"

import "../css/style.css"
import "../css/sketchy.css"
import "../css/all.min.css"
import "../css/duotone.min.css"
import icon from "../img/icon.png"

import { Helmet } from "react-helmet"
import { ThemeProvider } from "./utils/context.js"
import MenuPrincipal from "./menu/MenuPrincipal.js"
import MenuCampagne from "./menu/MenuCampagne.js"
import Characters from "./characters/Characters.js"
import Presentation from "./presentation/Presentation.js"
import Maps from "./maps/Maps.js"
import Login from "./account/Login.js"
import JoinCampaign from "./account/JoinCampaign.js"
import NewCampaign from "./account/NewCampaign.js"
import CampaignOptions from "./campaign/CampaignOptions.js"
import Index from "./index/Index.js"

export default function App() {

  return(
    <ThemeProvider>
      <MenuPrincipal/>
      <div class="my-app">
        <Helmet>
          <title>Bières et Pizzas</title>
          <meta name="description" content="Feuilles de personnage, création de lieux et mécaniques de combat pour jeux de rôle papier ou plateau" />
          <meta property="og:title" content="Bières et Pizzas" />
          <meta property="og:description" content="Feuilles de personnage, création de lieux et mécaniques de combat pour jeux de rôle papier ou plateau" />
          <meta property="og:url" content="https://www.bieresetpizzas.fr/" />
          <meta property="og:type" content="website" />
          <link rel="icon" href={icon} />
        </Helmet>
        <MenuCampagne/>
        
        <div class="my-main-content mt-3">
          <Routes>
            <Route exact path="/" element={<Presentation/>}/>
            <Route exact path="/personnages" element={<Characters/>}/>
            <Route exact path="/index" element={<Index/>}/>
            <Route exact path="/lieux" element={<Maps/>}/>
            <Route exact path="/connexion" element={<Login/>}/>
            <Route exact path="/rejoindre-campagne" element={<JoinCampaign/>}/>
            <Route exact path="/nouvelle-campagne" element={<NewCampaign/>}/>
            <Route exact path="/options" element={<CampaignOptions/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
        </div>
      </div>
    </ThemeProvider> 
    )
}