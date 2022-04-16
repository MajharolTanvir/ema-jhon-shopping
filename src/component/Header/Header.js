import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import auth from '../../init.firebase';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleLogout = () => {
        signOut(auth)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src={logo} alt="" width="100" height="30"></img></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item list-unstyled">
                            <CustomLink className="nav-link" aria-current="page" to="/">Shop</CustomLink>
                        </li>
                        <li className="nav-item list-unstyled">
                            <CustomLink className="nav-link" to="/order">Order review</CustomLink>
                        </li>
                        <li className="nav-item list-unstyled">
                            <CustomLink className="nav-link" to="/inventory">Inventory</CustomLink>
                        </li>
                        <li className="d-flex nav-item list-unstyled align-items-center">
                            {
                                user ? <button onClick={handleLogout} style={{ color: 'white', background: 'black', border: '0' }}>Log out</button> : <CustomLink className="nav-link" to="/login">Login</CustomLink>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;