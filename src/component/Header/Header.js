import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/logo"><img src={logo} alt="" width="100" height="30"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/shop">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/order">Order</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="review">Order review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/inventory">Inventory</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;