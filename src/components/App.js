import React from "react"

import {Route, Routes} from "react-router-dom";

import "../css/style.css"
import "../css/bootstrap.min.css"
import "../css/all.min.css"
import "../css/duotone.min.css"

import MenuPrincipal from "./units/MenuPrincipal.js"
import { ThemeProvider } from "./utils/context.js";
import Characters from "./characters/Characters.js";

export default function App() {

  return(
    <ThemeProvider>
      <div class="my-app">
        <MenuPrincipal/>
        
        <div class="my-main-content">
          <Routes>
            <Route exact path="/personnages" element={<Characters/>}/>
          </Routes>
        </div>
      </div>
    </ThemeProvider> 
      );
}