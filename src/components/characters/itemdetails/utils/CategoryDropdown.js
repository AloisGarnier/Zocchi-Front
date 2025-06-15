import React, { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../../utils/context.js"

import * as text from "../../../utils/text.js" 

/**
 * 
 * @param {*} props selected
 * @returns 
 */
export default function CategoryDropdown(props) {

    const {domain, language, changeLanguage, user, changeUser, campaign, changeCampaign} = useContext(ThemeContext)

    const [currentCategory, setCurrentCategory] = useState({})
    const [categories, setCategories] = useState([])

    const backUrl = domain + 'items/'
    const sheetUrl = domain + 'sheet/'

    useEffect(() => fetchCategories(), [])
    useEffect(() => fetchCategories(), [campaign])
    useEffect(() => fetchCurrentCategory(), [])
    useEffect(() => fetchCurrentCategory(), [campaign])

    function fetchCategories() {
        fetch(backUrl + "categories/" + campaign.id)
            .then(response => response.json())
            .then(json => setCategories(json))
    }

    function fetchCurrentCategory() {
        fetch(backUrl + "categoryBySheetElement/" + props.selected.id)
            .then(response => response.json())
            .then(json => setCurrentCategory(json))
    }

    function changeCategory(newId) {
        if(newId && newId != 0) {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
            }
            fetch(sheetUrl + "category/" + props.selected.id + "/" + newId, requestOptions)
                .then(() => fetchCurrentCategory())
        }
    }

    function categoryDropdown() {
        let options = [<option value="0">- - -</option>]
        for(let i=0; i<categories.length; i++) {
            options.push(
                <option value={categories[i].id}>{categories[i].name}</option>
            )
        }

        return(
            <select class="form-select select-dropdown my-1 square-3-nd" 
                    value={currentCategory.id} 
                    onChange={event => changeCategory(event.target.value)}>
                {options}
            </select>
        )
    }

    return(
        <div class="d-flex flex-row justify-content-between align-items-center">
            {text.displayText('category', language) + " :"}
            {categoryDropdown()}
        </div>
    )
}