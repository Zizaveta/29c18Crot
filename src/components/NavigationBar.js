import React from 'react';
import {Link} from 'react-router-dom';

export default function() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Galary</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to="/allimages">All images</Link>
                    <Link className="nav-item nav-link" to="/addimage">Add image</Link>
                    <Link className="nav-item nav-link" to="/login">Login</Link>
                    <Link className="nav-item nav-link" to="/registration">Registration</Link>

                </div>
            </div>
        </nav>
    );
}