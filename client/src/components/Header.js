import React from "react";
import { Link } from "react-router-dom";



//import Auth from "../utils/auth";

const Header = () => {
    // const logout = (event) => {
    //     event.preventDefault();
    //     Auth.logout();
    // };
    return (
        <div>
                <nav>
                    <Link to="/">
                        <h1>NomNomad</h1>
                    </Link>
                    <ul>
                        <li><Link to ="/mission">Our Mission</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                        
                    </ul>
                </nav>
                
        </div>
    );
};

export default Header;