import React, { useContext, useState, useEffect } from "react"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 
import Category from "./Category.js"

export default function Index(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const backUrl = domain + 'items/'

    const [categories, setCategories] = useState("")
    const [newCategoryName, setNewCategoryName] = useState("")
    const [hasChanged, setHasChanged] = useState(false)

    useEffect(() => fetchCategories(), [])
    useEffect(() => fetchCategories(), [campaign, hasChanged])

    function fetchCategories() {
        if(campaign) {
            fetch(backUrl + "categories/" + campaign.id)
                .then(response => response.json())
                .then(json => setCategories(json))
        }
    }

    function addCategory() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }
        fetch(backUrl + "newCategory/" + campaign.id + "/" + newCategoryName, requestOptions)
            .then(() => setHasChanged(b => !b))
    }

    function displayCategories() {
        let catDisplay = []
        for(let i=0; i<categories.length; i++) {
            catDisplay.push(
                <div class="card border-primary m-3 b-solid">
                        <Category cat={categories[i]} setHasChanged={setHasChanged}/>
                    </div>
            )
        }
        return catDisplay
    }

    function displayNewCat() {
        if(campaign && !campaign.characterName) {
            return(
                <div class="card border-primary m-3">
                    <div class="card-body d-flex flex-column align-items-center">
                        {text.displayText('newcategory', language)}
                        <div class="d-flex flex-row align-items-center">
                            <div class="form-floating my-2 me-3">
                                <input class="form-control" id="floatingInput" value={newCategoryName} onChange={event => setNewCategoryName(event.target.value)}/>
                                <label for="floatingInput">{text.displayText('name', language)}</label>
                            </div>
                            <a type='button' class="btn btn-info my-2" onClick={() => addCategory()}>
                                {text.displayText('create', language)}
                            </a>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return(
        <div class="d-flex flex-column align-items-center">
            <div class="d-flex flex-wrap align-items-center justify-content-around m-3">
                {displayCategories()}
            </div>
            {displayNewCat()}
        </div>
    )
}