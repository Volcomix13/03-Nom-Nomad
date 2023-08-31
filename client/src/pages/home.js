import React from 'react';
import Header from '../components/Header.js';
import Auth from '../utils/auth.js';
import Dashboard from '../components/dashboard.js';
// import FoodTruckSearch from '../components/FoodTruckSearch.js';
// import LocationSearch from '../components/locationsearch.js';
// import Map from '../components/Map.js';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
        </div>
        // <div>
        // < Header />
        // <main>
        // {Auth.loggedIn() ? (
        // <div class="home-container">
        //     <container id="home-page-auth-loggedout-left">
        //         <div id="homePageHeader">
        //             <h1>Find, Feast, Repeat!</h1>
        //         </div>
            
        //         <section id="home-description">
        //             <p><b>
        //             Welcome to your new go-to app for finding food trucks serving fresh flavors. 
        //             Explore a variety of cuisines and discover new flavors
        //             in your own backyard!
        //             </b></p>
        //         </section>

        //         <section id="home-auth-loggedout-btns">
        //             <button id="home-login-btn">Login</button>
        //             <button id="home-signup-btn">Signup</button>
        //         </section>
        //     </container>
        //     <container id="home-page-auth-loggedout-right">
        //         <image>
        //             <div id="hp-truck-logo"></div>
        //         </image>
        //     </container>
        //     </div>
        // ) : (
        //     <> 
        //     <div id='logged-in-view'>
        //         {/* < Dashboard /> */}
        //         {/* < FoodTruckSearch /> */}
        //         <div>
        //             < Map />
        //             < LocationSearch />
        //         </div>
        //     </div>
        //     </>)}
        // </main>
        // < Footer />
        // </div>
    );
}

export default Home;