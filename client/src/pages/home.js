import React from 'react';
import Auth from '../utils/auth.js';
import Dashboard from '../components/dashboard.js';
// import FoodTruckSearch from '../components/FoodTruckSearch.js';
// import LocationSearch from '../components/locationsearch.js';
// import Map from '../components/Map.js';

const Home = () => {
    return (
        <div>
        <main>
        <div class="home-container">
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
                    <button id="home-login-btn">Login</button>
                    <button id="home-signup-btn">Signup</button>
                </section>
            </div>
            <div id="home-page-auth-loggedout-right">
                <img>
                    <div id="hp-truck-logo"></div>
                </img>
            </div>
            </div>
            {/* {Auth.loggedIn() ? (
            
            <div id='logged-in-view'>
                {/* < Dashboard /> */}
                {/* < FoodTruckSearch /> */}
                {/* <div> */}
                    {/* < Map />
                    < LocationSearch /> */}
                {/* </div>
            </div>
            )} 
            </div>
            */}
        </main>
        </div>
    );
}

export default Home;