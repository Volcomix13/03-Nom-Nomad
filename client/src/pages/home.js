import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to NomNomad</h1>
        <p>Discover Food Trucks Near You</p>
      </header>

      <section className="featured-food-trucks">
        <h2>Featured Food Trucks</h2>
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          NomNomad is your go-to app for finding food trucks serving delicious meals
          in your area. Explore a variety of cuisines and discover new flavors
          on your culinary journey.
        </p>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>
          1. Enter your location or use your current location to find food trucks near you.<br />
          2. Filter by cuisine or search for your favorite food truck.<br />
          3. View food truck details, including their menu and reviews.<br />
          4. Enjoy your meal!
        </p>
      </section>
    </div>
  );
}

export default Home;