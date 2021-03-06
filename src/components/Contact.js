import React from 'react';
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import './index.css';

import fr from "../logos/france.svg";
import en from "../logos/united-kingdom.svg";

function Contact() {

    const lang = useSelector(state => state.languageReducer.language)
    const dispatch = useDispatch()

    return (
        <div className="Contact">
            <header className="App-header">
                <div className="nav-link">
                    <Link to="/" className="badge badge-light mr-2 h-100">Acceuil</Link>
                    <div className="nav-item dropdown">
                        <a className="badge badge-light dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            <img className="language-icon mr-3" src={lang === 'fr' ? fr : en} alt="français"/>
                            {lang}
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <button className={"dropdown-item " + (lang === 'fr' ? 'active' : '')} onClick={(() => dispatch({type : 'fr'}))}>
                                <img className="language-icon mr-3" src={fr} alt="français"/>
                                Français
                            </button>
                            <button className={"dropdown-item " + (lang === 'en' ? 'active' : '')} onClick={(() => dispatch({type : 'en'}))}>
                                <img className="language-icon mr-3" src={en} alt="français"/>
                                English
                            </button>
                        </ul>
                    </div>
                </div>
                <h1>React - Redux - hooks</h1>
                <h2>page Contact</h2>
            </header>
        </div>
    );
}

export default Contact;
