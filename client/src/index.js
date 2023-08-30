// import React, { Component } from 'react';
// import './index.css';

// class FoodTruckSearch extends Component {//change to a function
//   constructor() {
//     super();
//     this.state = {
//       location: '',
//     };
//   }

//   handleLocationChange = (e) => {
//     this.setState({ location: e.target.value });
//   }

//   handleSearch = () => {
//     // search logic here, possibly making an API request to your backend.
//   }
// //this is a component
//   render() {
//     return (
//       <div className="food-truck-search-container">
//         <h2>Find Food Trucks Near You</h2>
//         <div className="search-form">
//           <input
//             type="text"
//             placeholder="Enter Location"
//             value={this.state.location}
//             onChange={this.handleLocationChange}
//           />
//           <button onClick={this.handleSearch}>Search</button>
//         </div>
//         {/* Map component here */}
//       </div>
//     );
//   }
// }

// export default FoodTruckSearch;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();