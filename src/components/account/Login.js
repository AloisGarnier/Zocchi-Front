import React, { useContext, useState } from "react"
import { ThemeContext } from "../utils/context";

import * as text from "../utils/text.js" 
import Card from "../utils/Card.js";
import { useNavigate } from "react-router-dom";

export default function Login(props) {

    const {domain, language, changeLanguage, user, changeUser} = useContext(ThemeContext)

    const [usernameLogin, setUsernameLogin] = useState("")
    const [passwordLogin, setPasswordLogin] = useState("")
    const [usernameSignup, setUsernameSignup] = useState("")
    const [emailSignup, setEmailSignup] = useState("")
    const [passwordSignup, setPasswordSignup] = useState("")
    const [wrongLogin, setWrongLogin] = useState("")

    const navigate = useNavigate();

    const backUrl = domain + "security/"

    function ownerRegistration(json) {
        if(json) {
            changeUser(
                {
                    token: json.token,
                    id: json.owner.id,
                    username: json.owner.username,
                    email: json.owner.email,
                }
            )
            navigate("/personnages")
            location.reload();
        } else {
            setWrongLogin(true)
        }
    }

    function jsonIfNotNull(response) {
        if(!response.ok) {
            return null
        }
        return response.json()
    }

    function fetchCustomer() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: usernameLogin, password: passwordLogin})
        }
        fetch(backUrl + "authorize", requestOptions)
            .then(response => jsonIfNotNull(response))
            .then(json => ownerRegistration(json))
    }

    function wrongLoginwarning() {
        if(wrongLogin) {
            return(
                <small class="text-warning">
                    {text.displayText('wronglogin', language)}
                </small>
            )
        }
    }

    return(
        <Card header='connection'>
            <div class="d-flex flex-row">
                <div class="d-flex flex-column align-items-center mx-3">
                    <div class="mb-3">
                        {text.displayText('alreadyaccount', language)}
                    </div>
                    <div class="form-floating mb-3">
                        <input class="form-control" id="floatingInput" value={usernameLogin} onChange={event => setUsernameLogin(event.target.value)}/>
                        <label for="floatingInput">{text.displayText('username', language)}</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" autocomplete="off" value={passwordLogin} onChange={event => setPasswordLogin(event.target.value)}/>
                        <label for="floatingPassword">{text.displayText('password', language)}</label>
                    </div>
                    {wrongLoginwarning()}
                    <a type='button' class="btn btn-success mt-3" onClick={() => fetchCustomer()}>
                        {text.displayText('connexion', language)}
                    </a>
                </div>
                <div class="vl mx-3"/>
                <div class="d-flex flex-column align-items-center mx-3">
                    <div class="mb-3">
                        {text.displayText('wantcreateaccount', language)}
                    </div>
                    <div class="form-floating mb-3">
                        <input class="form-control" id="floatingInput" value={usernameSignup} onChange={event => setUsernameSignup(event.target.value)}/>
                        <label for="floatingInput">{text.displayText('username', language)}</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingMail" value={emailSignup} onChange={event => setEmailSignup(event.target.value)}/>
                        <label for="floatingInput">{text.displayText('email', language)}</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" autocomplete="off" value={passwordSignup} onChange={event => setPasswordSignup(event.target.value)}/>
                        <label for="floatingPassword">{text.displayText('password', language)}</label>
                    </div>
                    <a type='button' class="btn btn-info mt-3" onClick={() => fetchCustomer()}>
                        {text.displayText('accountcreate', language)}
                    </a>
                </div>
            </div>
        </Card>     
    )
}