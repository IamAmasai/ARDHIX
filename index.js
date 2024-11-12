import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to ArdhiX</h1>
      <p>Your decentralized land registry system</p>
      <nav>
        <ul>
          <li>
            <Link to="/map">View Map</Link>
          </li>
          <li>
            <Link to="/ownership">Check Ownership</Link>
          </li>
          <li>
            <Link to="/transactions">Initiate Transaction</Link>
          </li>
          <li>
            <Link to="/profile">Access Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
