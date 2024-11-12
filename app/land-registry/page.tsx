import { useState } from "react";
import MapInterface from "./components/MapInterface";

export default function LandRegistryPage() {
  const [selectedGeohash, setSelectedGeohash] = useState(null);
  const [ownershipInfo, setOwnershipInfo] = useState(null);
  const [transactionHistory, setTransactionHistory] = useState(null);

  const handleGeohashSelect = (geohash) => {
    setSelectedGeohash(geohash);
    // Fetch ownership information and transaction history for the selected geohash
    // Update ownershipInfo and transactionHistory state variables
  };

  const handleInitiateTransaction = () => {
    // Initiate land transaction for the selected geohash
  };

  return (
    <div>
      <h1>Land Registry System</h1>
      <MapInterface onGeohashSelect={handleGeohashSelect} />
      {selectedGeohash && (
        <div>
          <h2>Ownership Information</h2>
          <pre>{JSON.stringify(ownershipInfo, null, 2)}</pre>
          <h2>Transaction History</h2>
          <pre>{JSON.stringify(transactionHistory, null, 2)}</pre>
          <button onClick={handleInitiateTransaction}>Initiate Transaction</button>
        </div>
      )}
    </div>
  );
}
