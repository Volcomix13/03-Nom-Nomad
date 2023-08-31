import React, { useState } from 'react';
import FoodTruckSearch from '../components/FoodTruckSearch';

const Dashboard = () => {
    const [favoriteFoodTrucks] = useState([
        { id: 1, name: 'Vera Cruz Tacos', cuisine: ' Mexican ' }, 
        { id: 2, name: 'Arlos', cuisine: ' Vegan' }, 
    ]);

    const [recentReviews] = useState([
        { id: 1, foodTruckName: 'Vegan Nom', rating: 4 , comment: 'Delicious food, long lines on weekends tho ' },
        { id: 2, foodTruckName: 'Milky Way Shakes ', rating: 5, comment: 'You HAVE to try the peach cobbler shake! ' },    
    ]);

    return (
        <div className="dashboard-container">
            <div id="favs-reviews">
                <div className="favorite-food-trucks" id="fav-trucks">
                <h3>Favorites</h3>
                <ul>
                {favoriteFoodTrucks.map((truck) => (
                    <li key={truck.id}>
                        <strong>{truck.name}</strong> 
                        :{truck.cuisine}
                        <br></br>
                        <br></br>
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
                        <div>- {review.comment}</div>
                        <br></br>
                    </li>
                ))}
                </ul>
                </div>
            </div>
        
        < FoodTruckSearch />
        </div>

    );
}


export default Dashboard;