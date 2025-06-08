import React, { useContext } from "react"
import { ThemeContext } from "../utils/context.js"

import * as text from "../utils/text.js" 
import LabelDetails from "./itemdetails/LabelDetails.js"
import NumFieldDetails from "./itemdetails/NumFieldDetails.js"
import NumFieldBonusDetails from "./itemdetails/NumFieldBonusDetails.js"
import TextFieldDetails from "./itemdetails/TextFieldDetails.js"
import NumFieldOverDetails from "./itemdetails/NumFieldOverDetails.js"
import FormulaDetails from "./itemdetails/FormulaDetails.js"
import LargeTextFieldDetails from "./itemdetails/LargeTextFieldDetails.js"
import SimpleListDetails from "./itemdetails/SimpleListDetails.js"
import ItemListDetails from "./itemdetails/ItemListDetails.js"

export default function ItemDetails(props) {

    const {domain, language, changeLanguage, user, changeUser} = useContext(ThemeContext)

    function actionOnChange(newValue) {
        props.setSelected({x:props.selected.x, y:props.selected.y, id:props.selected.id, type:props.selected.type, label:newValue})
        props.modifyItem({x:props.selected.x, y:props.selected.y, id:props.selected.id, type:props.selected.type, label:newValue}, null)
    }

    function form() {
        if(props.selected && !props.selected.id.toString().includes("new")) {
            switch(props.selected.type) {
                case "label":
                    return(
                        <LabelDetails 
                            actionOnChange={actionOnChange}
                            selected={props.selected}
                        />
                    )
                case "numfield":
                    return(
                        <NumFieldDetails 
                            actionOnChange={actionOnChange}
                            selected={props.selected}
                        />
                    )
                case "numfieldbonus":
                    return(
                        <NumFieldBonusDetails 
                            actionOnChange={actionOnChange}
                            selected={props.selected}
                        />
                    )
                case "numfieldover":
                    return(
                        <NumFieldOverDetails 
                            actionOnChange={actionOnChange}
                            selected={props.selected}
                        />
                    )
                case "formula":
                    return(
                        <FormulaDetails 
                            actionOnChange={actionOnChange}
                            selected={props.selected}
                        />
                    )
                case "textfield":
                    return(
                        <TextFieldDetails 
                            actionOnChange={actionOnChange}
                            selected={props.selected}
                        />
                    )
                case "largetextfield":
                    return(
                        <LargeTextFieldDetails 
                            actionOnChange={actionOnChange}
                            selected={props.selected}
                        />
                    )  
                case "simplelist":
                    return(
                        <SimpleListDetails 
                            actionOnChange={actionOnChange}
                            selected={props.selected}
                        />
                    )  
                case "itemlist":
                    return(
                        <ItemListDetails 
                            actionOnChange={actionOnChange}
                            selected={props.selected}
                        />
                    )  
                default:
                    break
            }
        }
    }
    
    return (
        <div class="card border-primary mb-3 store">
            <div class="card-body overflow-scroll">
                <h4 class="card-title">{text.displayText('details', language)}</h4>
                {form()}
            </div>
        </div>
    )
}