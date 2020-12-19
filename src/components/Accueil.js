import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import './index.css';

import fr from "../france.svg";
import en from "../united-kingdom.svg";

function Accueil() {
    const lang = useSelector(state => state.languageReducer.language)
    const dispatch = useDispatch()

    return (
        <div className="Accueil">
            <header className="App-header">
                <div className="nav-link">
                    <Link to="/contact" className="badge badge-light mr-2">Contact</Link>
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
                <h2>page Accueil</h2>
            </header>
        </div>
    );
}

export default Accueil;
