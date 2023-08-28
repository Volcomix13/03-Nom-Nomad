import React from "react";
import { Link } from "react-router-dom";


import Auth from "../../utils/auth";

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header>
                <nav>
                    <Link to="/">
                        <h1>NomNomad</h1>
                    </Link>
                    <ul>
                        <li><Link to ="/mission">Our Mission</Link></li>
                        {Auth.loggedIn() ? (
                        <li><button on onClick={logout}>Logout</button></li>  
                        ) : (
                        <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                        </>
                        )}
                    </ul>
                </nav>
                
        </header>
    );
};

export default Header;