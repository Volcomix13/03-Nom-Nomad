import React from 'react';
import {
    ApolloClient, 
    InMemoryCache, 
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setcontext((_, { headers }) => {
    
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
        <ApolloProvider client={client}>
            <Router>
                <div className="flex-column justify-flex-start min-100-vh">
                    <Header />
                    <div className="container">
                        <Routes>
                            <Route
                             path="/"
                             element={<Home />}
                           />
                            <Route
                             path="/login"
                             element={<Login />}
                           />
                            <Route
                             path="/signup"
                             element={<Signup />}
                           />
                            <Route
                             path="/me"
                             element={<Profile />}
                           />
                            <Route
                             path="/profile/:username"
                             element={<Profile />}
                           />
  {/* //Commenting out for now  <Route  */}
     {/* //Commenting out for now  path="thoughts/:thoughtId"
     //Commenting out for now  element={<SingleThought />}
  //Commenting out for now /> */}
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
