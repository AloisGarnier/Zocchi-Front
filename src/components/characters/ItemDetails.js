import React, { useContext } from "react"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 

export default function ItemDetails(props) {

    const {domain, language, changeLanguage, user, changeUser} = useContext(ThemeContext)

    function actionOnChangeLabel(newValue) {
        props.setSelected({x:props.selected.x, y:props.selected.y, id:props.selected.id, type:"label", label:newValue})
        props.modifyItem({x:props.selected.x, y:props.selected.y, id:props.selected.id, type:"label", label:newValue}, null)
    }

    function form() {
        if(props.selected && !props.selected.id.toString().includes("new")) {
            switch(props.selected.type) {
                case "label":
                    return(
                        <div class="d-flex flex-column">
                            <div class="d-flex flex-row justify-content-between align-items-center">
                                {text.displayText('label', language) + " :"}
                                <input 
                                    type="text" 
                                    class="form-control square-3-nd" 
                                    id="inputDefault" 
                                    onChange={event => actionOnChangeLabel(event.target.value)}
                                    value={props.selected.label}/>
                            </div>
                        </div>
                    )
                case "numfield":
                    return(
                        <div class="d-flex flex-column">
                            <div class="d-flex flex-row justify-content-between align-items-center">
                                {text.displayText('fieldname', language) + " :"}
                                <input 
                                    type="text" 
                                    class="form-control square-3-nd" 
                                    id="inputDefault" 
                                    onChange={event => actionOnChangeLabel(event.target.value)}
                                    value={props.selected.label}/>
                            </div>
                            <fieldset class="d-flex flex-row my-2">
                                {text.displayText('nameposition', language) + " :"}
                                <div class="form-check mx-2">
                                    <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1"/>
                                    <label class="form-check-label" for="optionsRadios1">
                                    {text.displayText('top', language)}
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>
                                    <label class="form-check-label" for="optionsRadios2">
                                    {text.displayText('left', language)}
                                    </label>
                                </div>
                            </fieldset>
                        </div>
                    )
                case "numfieldbonus":
                    return(
                        <div class="d-flex flex-column">
                            <div class="d-flex flex-row justify-content-between align-items-center">
                                {text.displayText('fieldname', language) + " :"}
                                <input 
                                    type="text" 
                                    class="form-control square-3-nd" 
                                    id="inputDefault" 
                                    onChange={event => actionOnChangeLabel(event.target.value)}
                                    value={props.selected.label}/>
                            </div>
                            <fieldset class="d-flex flex-row my-2">
                                {text.displayText('nameposition', language) + " :"}
                                <div class="form-check mx-2">
                                    <input class="form-check-input" type="radio" name="nameRadios" id="optionsRadios1" value="option1"/>
                                    <label class="form-check-label" for="optionsRadios1">
                                    {text.displayText('top', language)}
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="nameRadios" id="optionsRadios2" value="option2"/>
                                    <label class="form-check-label" for="optionsRadios2">
                                    {text.displayText('left', language)}
                                    </label>
                                </div>
                            </fieldset>
                            <fieldset class="d-flex flex-row my-2">
                                {text.displayText('bonusposition', language) + " :"}
                                <div class="form-check mx-2">
                                    <input class="form-check-input" type="radio" name="bonusRadios" id="optionsRadios1" value="option1"/>
                                    <label class="form-check-label" for="optionsRadios1">
                                    {text.displayText('bottom', language)}
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="bonusRadios" id="optionsRadios2" value="option2"/>
                                    <label class="form-check-label" for="optionsRadios2">
                                    {text.displayText('right', language)}
                                    </label>
                                </div>
                            </fieldset>
                        </div>
                    )
                default:
                    break
            }
        }
    }
    
    return (
        <div class="card border-primary mb-3 store">
            <div class="card-body">
                <h4 class="card-title">{text.displayText('details', language)}</h4>
                {form()}
            </div>
        </div>
    )
}