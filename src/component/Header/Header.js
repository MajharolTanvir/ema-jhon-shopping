import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <a className="navbar-brand" href="/logo"><img src={logo} alt="" width="100" height="30"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <CustomLink className="nav-link" aria-current="page" to="/">Shop</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/order">Order review</CustomLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/inventory">Inventory</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;