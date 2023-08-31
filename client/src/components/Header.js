import React from "react";
import { Link } from "react-router-dom";


<<<<<<< HEAD
import Auth from "../utils/auth";
=======

// import Auth from "../utils/auth";
>>>>>>> de7ae1d18bc3a97abb26de3bbe24696d7410af42

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <div>
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
                
        </div>
    );
};

export default Header;