import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../utils/context.js"

import OptionRadio from "./utils/OptionRadio.js"
import CategoryDropdown from "./utils/CategoryDropdown.js"
import LibelleInput from "./utils/LibelleInput.js"

/**
 * 
 * @param {*} props actionOnChange, selected.label
 * @returns 
 */
export default function SimpleListDetails(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    return(
        <div class="d-flex flex-column">
            <LibelleInput
                selected={props.selected}
                actionOnChange = {props.actionOnChange}
            />
            <CategoryDropdown 
                selected={props.selected}
            />
            <OptionRadio 
                title="nameposition"
                options={["top", "left"]}
                selected={props.selected}
            />
            <OptionRadio 
                title="visibility"
                options={["gamemasteronly", "gamemasterandplayer", "everybody"]}
                selected={props.selected}
            />
        </div>
    )
}