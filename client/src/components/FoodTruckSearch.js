import React, { useState } from 'react';

const FoodTruckSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [foodTrucks, setFoodTrucks] = useState([
    { id: 1, name: 'Vera Cruz Tacos', cuisine: 'Mexican' },
    { id: 2, name: "Patrizi's", cuisine: 'Italian' },
    { id: 3, name: 'Dee Dee', cuisine: 'Asian' },
    { id: 4, name: 'Plow Burger', cuisine: 'American' },
    { id: 5, name: 'Biscuits + Groovy', cuisine: 'Brunch' },
    { id: 6, name: 'Vegan Nom', cuisine: 'Vegan' },
    { id: 7, name: 'Milky Way Shakes', cuisine: 'Dessert' },
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
      <div className="food-truck-search" id="truck-search">
            <div id="search-row">
            <h2>Find Food Trucks</h2>
                <div className="search-bar" id="dashboard-search-bar">
                <input
                    type="text"
                    placeholder="Search by name or cuisine"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button id="dashboard-search-btn" onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className="filter-by-cuisine" id="filter-by">
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
            <div className="food-truck-list" id="truck-list">
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
                  <> 
                    <li key={truck.id}>
                    <strong>{truck.name}</strong> - {truck.cuisine}
                    </li>
                    <br></br>
                  </>
                ))}
            </ul>
            </div>
        </div>
    );
}


export default FoodTruckSearch;







