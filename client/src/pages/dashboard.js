import React, { useState } from 'react';

const Dashboard = () => {
    const [favoriteFoodTrucks] = useState([
        { id: 1, name: ' ', cuisine: ' ' }, 
        { id: 2, name: ' ', cuisine: ' ' }, 
    ]);

    const [recentReviews] = useState([
        { id: 1, foodTruckName: ' ', rating: 4, comment: ' ' },
        { id: 2, foodTruckName: ' ', rating: 5, comment: ' ' },    
    ]);

    return (
        // const { favoriteFoodTrucks, recentReviews } = this.state;

        // return (
        <div>
            <div className="dashboard-container">
                <div className="favorite-food-trucks" id="fav-trucks">
                <h3>Favorites</h3>
                <ul>
                {favoriteFoodTrucks.map((truck) => (
                    <li key={truck.id}>
                        <strong>{truck.name}</strong> - {truck.cuisine}
                    </li>
                ))}
                </ul>
                </div>
        
                <div className="recent-reviews" id="review-container">
                <h3>Reviews</h3>
                <ul>
                    {recentReviews.map((review) => (
                    <li key={review.id}>
                        <strong>{review.foodTruckName}</strong>
                        <div>Rating: {review.rating}</div>
                        <div>{review.comment}</div>
                    </li>
                ))}
                </ul>
                </div>
            </div>
        </div>
    );
}


export default Dashboard;