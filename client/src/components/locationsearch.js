import React from 'react';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

const LocationSearch = () => {
  function onPlaceSelect(value) {
    console.log(value);
  }

  function onSuggestionChange(value) {
    console.log(value);
  }

 // add other functions if needed here 

  return (
    <section id="location-search-input">
      <GeoapifyContext apiKey="2572cdb6e6ff4627b25d413527387788">
        <GeoapifyGeocoderAutocomplete
          placeSelect={onPlaceSelect}
          suggestionsChange={onSuggestionChange}
          // other props...
        />
      </GeoapifyContext>
    </section>
  );
};

export default LocationSearch;

/*  This is the code that need to placed within a page
import React from 'react';
import LocationSearch from './components/LocationSearch'; // adjust this path if needed

const MyPage = () => {
  return (
    <div>
      
      <LocationSearch />
    
    </div>
  );
};

export default MyPage;
*/