import React, { useState } from 'react';
import { getOwnershipInfo, getTransactionHistory } from './api/ownership';

const OwnershipPage = () => {
  const [geohash, setGeohash] = useState('');
  const [ownershipInfo, setOwnershipInfo] = useState(null);
  const [transactionHistory, setTransactionHistory] = useState(null);

  const handleGeohashChange = (event) => {
    setGeohash(event.target.value);
  };

  const handleCheckOwnership = async () => {
    const ownership = await getOwnershipInfo({ query: { geohash } });
    setOwnershipInfo(ownership);
    const history = await getTransactionHistory({ query: { geohash } });
    setTransactionHistory(history);
  };

  return (
    <div>
      <h1>Check Ownership</h1>
      <div>
        <label htmlFor="geohash">Enter Geohash:</label>
        <input
          type="text"
          id="geohash"
          value={geohash}
          onChange={handleGeohashChange}
        />
        <button onClick={handleCheckOwnership}>Check Ownership</button>
      </div>
      {ownershipInfo && (
        <div>
          <h3>Ownership Information</h3>
          <pre>{JSON.stringify(ownershipInfo, null, 2)}</pre>
        </div>
      )}
      {transactionHistory && (
        <div>
          <h3>Transaction History</h3>
          <pre>{JSON.stringify(transactionHistory, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default OwnershipPage;
