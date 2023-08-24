import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Logout = () => {
  const [isLoggedOut, setLoggedOut] = useState(false);

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('userToken'); 
    
    setLoggedOut(true);
  };

  if (isLoggedOut) {
    // Redirect the user to the login page after successful logout
    return <Redirect to="/login" />;
  }

  return (
    <div className="logout-container">
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;