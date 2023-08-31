import React from 'react';
import {
    ApolloClient, 
    InMemoryCache, 
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home.js';
import Login from './pages/login.js';
import Signup from './pages/signup.js';
// import Logout from './pages/logout.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
// import FoodTruckSearch from './components/FoodTruckSearch';
// import LocationSearch from './components/locationsearch.js';
// import Map from './components/Map.js';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    
    const token = localStorage.getItem('id_token');

    return {
        headers: { 
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({

    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        // <ApolloProvider client={client}>
            <Router>
                <div className="flex-column justify-flex-start min-100-vh">
                    {/* <Header /> */}
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                                    {/* <Route path="/login" element={<Login />} />
                                    <Route path="/logout" element={<Logout />}/>
                                    <Route path="/signup" element={<Signup />} /> */}
                                    {/* <Route path="/me" element={<Profile />} />
                                    <Route path="/profile/:username" element={<Profile />} /> */}
                                    {/* Uncomment this route when you're ready (probably dont need this line either)*/}
                                    {/* don't think we need this <Route path="thoughts/:thoughtId" element={<SingleThought />} /> */}
                        </Routes>
                    </div>
                    {/* <Footer/> */}
                </div>
            </Router>
        // </ApolloProvider>
    );
}

export default App;
