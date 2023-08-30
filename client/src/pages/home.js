import React from 'react';
import Header from '../components/Header.js';
import Auth from '../utils/auth.js';
import Dashboard from '../components/dashboard.js';
import FoodTruckSearch from '../components/FoodTruckSearch.js';
import LocationSearch from '../components/locationsearch.js';
import Map from '../components/Map.js';

const Home = () => {
    return (
        <div>
        < Header />
        <main>
        {Auth.loggedIn() ? (
        <div class="home-container">
            <container id="home-page-auth-loggedout-left">
                <div id="homePageHeader">
                    <h1>Find, Feast, Repeat!</h1>
                </div>
            
                {/* <!-- <section className="featured-food-trucks">
                    <h2>Featured Food Trucks</h2>
                </section> --> */}
            
                <section id="home-description">
                    <p><b>
                    Welcome to your new go-to app for finding food trucks serving fresh flavors. 
                    Explore a variety of cuisines and discover new flavors
                    in your own backyard!
                    </b></p>
                </section>

                <section id="home-auth-loggedout-btns">
                    <button id="home-login-btn">Login</button>
                    <button id="home-signup-btn">Signup</button>
                </section>
            </container>
            <container id="home-page-auth-loggedout-right">
                <image>
                    <div id="hp-truck-logo"></div>
                </image>
            </container>
        
            {/* <!-- <section className="how-it-works">
                <h2>How It Works</h2>
                <p>
                1. Enter your location or use your current location to find food trucks near you.<br />
                2. Filter by cuisine or search for your favorite food truck.<br />
                3. View food truck details, including their menu and reviews.<br />
                4. Enjoy your meal!
                </p>
            </section> --> */}
            </div>
        ) : (
            <> 
            < Dashboard />
            < Map />
            < FoodTruckSearch />
            < LocationSearch />

            </>)}
        </main>
        </div>
    );
}

export default Home;