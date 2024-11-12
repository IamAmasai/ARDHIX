import React, { useState } from 'react';

const TransactionsPage = () => {
  const [buyerInfo, setBuyerInfo] = useState({ name: '', walletAddress: '' });
  const [sellerInfo, setSellerInfo] = useState({ name: '', walletAddress: '' });
  const [geohash, setGeohash] = useState('');
  const [transactionConfirmed, setTransactionConfirmed] = useState(false);

  const handleInputChange = (event, setState) => {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleTransaction = async () => {
    // Implement the logic to initiate the land transaction
    // Update the transactionConfirmed state variable
    setTransactionConfirmed(true);
  };

  return (
    <div>
      <h1>Initiate Land Transaction</h1>
      <div>
        <h3>Buyer Information</h3>
        <label htmlFor="buyerName">Name:</label>
        <input
          type="text"
          id="buyerName"
          name="name"
          value={buyerInfo.name}
          onChange={(e) => handleInputChange(e, setBuyerInfo)}
        />
        <label htmlFor="buyerWalletAddress">Wallet Address:</label>
        <input
          type="text"
          id="buyerWalletAddress"
          name="walletAddress"
          value={buyerInfo.walletAddress}
          onChange={(e) => handleInputChange(e, setBuyerInfo)}
        />
      </div>
      <div>
        <h3>Seller Information</h3>
        <label htmlFor="sellerName">Name:</label>
        <input
          type="text"
          id="sellerName"
          name="name"
          value={sellerInfo.name}
          onChange={(e) => handleInputChange(e, setSellerInfo)}
        />
        <label htmlFor="sellerWalletAddress">Wallet Address:</label>
        <input
          type="text"
          id="sellerWalletAddress"
          name="walletAddress"
          value={sellerInfo.walletAddress}
          onChange={(e) => handleInputChange(e, setSellerInfo)}
        />
      </div>
      <div>
        <label htmlFor="geohash">Geohash:</label>
        <input
          type="text"
          id="geohash"
          value={geohash}
          onChange={(e) => setGeohash(e.target.value)}
        />
      </div>
      <button onClick={handleTransaction}>Confirm Transaction</button>
      {transactionConfirmed && <p>Transaction confirmed!</p>}
    </div>
  );
};

export default TransactionsPage;
