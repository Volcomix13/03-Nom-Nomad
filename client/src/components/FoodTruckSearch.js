import React, { useState } from 'react';

function FoodTruckSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [foodTrucks, setFoodTrucks] = useState([
    { id: 1, name: 'Food Truck 1', cuisine: 'Mexican' },
    { id: 2, name: 'Food Truck 2', cuisine: 'Italian' },
    { id: 3, name: 'Food Truck 3', cuisine: 'Asian' },
    { id: 4, name: 'Food Truck 4', cuisine: 'American' },
    { id: 5, name: 'Food Truck 5', cuisine: 'Brunch' },
    { id: 6, name: 'Food Truck 6', cuisine: 'Vegan' },
    { id: 7, name: 'Food Truck 7', cuisine: 'Dessert' },
  ]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCuisineChange = (e) => {
    setSelectedCuisine(e.target.value);
  };

  const handleSearch = () => {
    const filteredFoodTrucks = foodTrucks.filter((truck) => {
      const matchesSearchTerm = truck.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCuisine = selectedCuisine === 'All' || truck.cuisine === selectedCuisine;

      return matchesSearchTerm && matchesCuisine;
    });
    setFoodTrucks(filteredFoodTrucks);
  };

  const cuisineCategories = [...new Set(foodTrucks.map((truck) => truck.cuisine))];

  return (
    <div className="food-truck-search">
      <h2>Find Food Trucks</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name or cuisine"
          value={searchTerm}
          onChange={handleSearchChange} 
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="filter-by-cuisine">
        <label>Filter by Cuisine:</label>
        <select value={selectedCuisine} onChange={handleCuisineChange}>
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

export default FoodTruckSearch;







