import React from 'react';
import { Link } from "react-router-dom";

// import Auth from '../utils/auth.js';
// import Dashboard from '../components/dashboard.js';
// import FoodTruckSearch from '../components/FoodTruckSearch.js';
// import LocationSearch from '../components/locationsearch.js';
// import Map from '../components/Map.js';

const Home = () => {
    return (
        <div>
        <main>
        <div className="home-container">
            <div id="home-page-auth-loggedout-left">
                <div id="homePageHeader">
                    <h1>Find, Feast, Repeat!</h1>
                </div>
            
                <div id="home-description">
                    <p><b>
                    Welcome to your new go-to app for finding food trucks serving fresh flavors. 
                    Explore a variety of cuisines and discover new flavors
                    in your own backyard!
                    </b></p>
                </div>

                <section id="home-auth-loggedout-btns">
                    <Link to="/login" id="home-login-btn" >Login</Link>
                    <Link to="/signup" id="home-signup-btn">Signup</Link>
                </section>
            </div>
            <div id="home-page-auth-loggedout-right">
                <img id="hp-truck-logo"></img>
            </div>
            </div>
        </main>
        </div>
    );
}

export default Home;