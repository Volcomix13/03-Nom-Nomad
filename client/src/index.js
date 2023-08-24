import React, { Component } from 'react';
import './index.css';

class FoodTruckSearch extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
    };
  }

  handleLocationChange = (e) => {
    this.setState({ location: e.target.value });
  }

  handleSearch = () => {
    // search logic here, possibly making an API request to your backend.
  }

  render() {
    return (
      <div className="food-truck-search-container">
        <h2>Find Food Trucks Near You</h2>
        <div className="search-form">
          <input
            type="text"
            placeholder="Enter Location"
            value={this.state.location}
            onChange={this.handleLocationChange}
          />
          <button onClick={this.handleSearch}>Search</button>
        </div>
        {/* Map component here */}
      </div>
    );
  }
}

export default FoodTruckSearch;