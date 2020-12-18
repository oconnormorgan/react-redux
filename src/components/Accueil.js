import React from 'react';
import {Link} from "react-router-dom";

import './index.css';

function Accueil() {
    return (
        <div className="Accueil">
            <header className="App-header">
                <div className="nav-link">
                    <Link to="/contact" className="badge badge-light">Contact</Link>
                </div>
                <h1>React - Redux - hooks</h1>
                <h2>page Accueil</h2>
            </header>
        </div>
    );
}

export default Accueil;
