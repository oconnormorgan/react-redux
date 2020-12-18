import React from 'react';
import {Link} from "react-router-dom";

import './index.css';

function Contact() {
    return (
        <div className="Contact">
            <header className="App-header">
                <div className="nav-link">
                    <Link to="/" className="badge badge-light">Acceuil</Link>
                </div>
                <h1>React - Redux - hooks</h1>
                <h2>page Contact</h2>
            </header>
        </div>
    );
}

export default Contact;
