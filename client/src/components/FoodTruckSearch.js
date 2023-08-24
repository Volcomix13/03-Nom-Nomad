import React, { Component } from 'react';

class FoodTruckSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      selectedCuisine: 'All', // Default to show all cuisine categories
      foodTrucks: [
        { id: 1, name: 'Food Truck 1', cuisine: 'Mexican' },
        { id: 2, name: 'Food Truck 2', cuisine: 'Italian' },
        { id: 3, name: 'Food Truck 3', cuisine: 'Asian' },
        { id: 4, name: 'Food Truck 4', cuisine: 'American' },
        { id: 5, name: 'Food Truck 5', cuisine: 'Brunch' },
        { id: 6, name: 'Food Truck 6', cuisine: 'Vegan' },
        { id: 7, name: 'Food Truck 7', cuisine: 'Dessert' },
        
      ],
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  handleCuisineChange = (e) => {
    this.setState({ selectedCuisine: e.target.value });
  }

  handleSearch = () => {
    const { searchTerm, selectedCuisine } = this.state;
  
   
    const filteredFoodTrucks = foodTrucks.filter((truck) => {
      const matchesSearchTerm = truck.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCuisine = selectedCuisine === 'All' || truck.cuisine === selectedCuisine;
  
      return matchesSearchTerm && matchesCuisine;
    });
    this.setState({ foodTrucks: filteredFoodTrucks });
  }

  render() {
    const { searchTerm, selectedCuisine, foodTrucks } = this.state;

    // Create an array of unique cuisine categories from the food trucks data
    const cuisineCategories = [...new Set(foodTrucks.map((truck) => truck.cuisine))];

    return (
      <div className="food-truck-search">
        <h2>Find Food Trucks</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name or cuisine"
            value={searchTerm}
            onChange={this.handleSearchChange}
          />
          <button onClick={this.handleSearch}>Search</button>
        </div>
        <div className="filter-by-cuisine">
          <label>Filter by Cuisine:</label>
          <select value={selectedCuisine} onChange={this.handleCuisineChange}>
            <option value="All">All</option>
            {cuisineCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="food-truck-list">
          <h3>Food Trucks</h3>
          <ul>
            {foodTrucks
              .filter((truck) => {
                if (selectedCuisine === 'All') {
                  return true; // Show all food trucks if "All" is selected
                } else {
                  return truck.cuisine === selectedCuisine;
                }
              })
              .map((truck) => (
                <li key={truck.id}>
                  <strong>{truck.name}</strong> - {truck.cuisine}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default FoodTruckSearch;







