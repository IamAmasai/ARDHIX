import React from 'react';

const ProfilePage = ({ user }) => {
  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <h2>Digital Identity</h2>
        <p>{user.digitalIdentity}</p>
      </div>
      <div>
        <h2>Properties Owned</h2>
        <ul>
          {user.propertiesOwned.map((property, index) => (
            <li key={index}>{property}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Transaction History</h2>
        <ul>
          {user.transactionHistory.map((transaction, index) => (
            <li key={index}>{transaction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
