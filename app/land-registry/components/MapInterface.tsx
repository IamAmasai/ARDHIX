import React, { useState } from "react";
import { getOwnershipInfo, getTransactionHistory, initiateLandTransaction } from "../actions";

const MapInterface = ({ onGeohashSelect }) => {
  const [selectedGeohash, setSelectedGeohash] = useState(null);
  const [ownershipInfo, setOwnershipInfo] = useState(null);
  const [transactionHistory, setTransactionHistory] = useState(null);

  const handleGeohashClick = async (geohash) => {
    setSelectedGeohash(geohash);
    const ownership = await getOwnershipInfo(geohash);
    setOwnershipInfo(ownership);
    const history = await getTransactionHistory(geohash);
    setTransactionHistory(history);
    onGeohashSelect(geohash);
  };

  const handleInitiateTransaction = async () => {
    const buyerAddress = prompt("Enter buyer's wallet address:");
    const sellerAddress = prompt("Enter seller's wallet address:");
    const price = prompt("Enter transaction price:");
    const result = await initiateLandTransaction(selectedGeohash, buyerAddress, sellerAddress, price);
    if (result.success) {
      alert("Transaction successful!");
    } else {
      alert("Transaction failed: " + result.error);
    }
  };

  return (
    <div>
      <h2>Map Interface</h2>
      <div>
        {/* Placeholder for map component */}
        <button onClick={() => handleGeohashClick("ke-5z4sd8e")}>Select Geohash ke-5z4sd8e</button>
      </div>
      {selectedGeohash && (
        <div>
          <h3>Selected Geohash: {selectedGeohash}</h3>
          <h4>Ownership Information</h4>
          <pre>{JSON.stringify(ownershipInfo, null, 2)}</pre>
          <h4>Transaction History</h4>
          <pre>{JSON.stringify(transactionHistory, null, 2)}</pre>
          <button onClick={handleInitiateTransaction}>Initiate Transaction</button>
        </div>
      )}
    </div>
  );
};

export default MapInterface;
