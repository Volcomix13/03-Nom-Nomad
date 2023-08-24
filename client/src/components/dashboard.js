import React, { Component } from 'react';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      favoriteFoodTrucks: [
        { id: 1, name: '', cuisine: '' },
        { id: 2, name: '', cuisine: '' },
      ],
      recentReviews: [
        { id: 1, foodTruckName: '', rating: 4, comment: '' },
        { id: 2, foodTruckName: '', rating: 5, comment: '' },
      ],
    };
  }

  render() {
    const { favoriteFoodTrucks, recentReviews } = this.state;

    return (
      <div className="dashboard-container">
        <h2>Dashboard</h2>

        <section className="favorite-food-trucks">
          <h3>Favorite Food Trucks</h3>
          <ul>
            {favoriteFoodTrucks.map((truck) => (
              <li key={truck.id}>
                <strong>{truck.name}</strong> - {truck.cuisine}
              </li>
            ))}
          </ul>
        </section>

        <section className="recent-reviews">
          <h3>Recent Reviews</h3>
          <ul>
            {recentReviews.map((review) => (
              <li key={review.id}>
                <strong>{review.foodTruckName}</strong>
                <div>Rating: {review.rating}</div>
                <div>{review.comment}</div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default Dashboard;