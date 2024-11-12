import React, { useState, useEffect } from 'react';

const DisputesPage = () => {
  const [disputes, setDisputes] = useState([]);
  const [newDispute, setNewDispute] = useState({ geohash: '', description: '' });

  useEffect(() => {
    // Fetch existing disputes from the server
    const fetchDisputes = async () => {
      try {
        const response = await fetch('/api/disputes');
        const data = await response.json();
        setDisputes(data);
      } catch (error) {
        console.error('Error fetching disputes:', error);
      }
    };

    fetchDisputes();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewDispute((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/disputes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDispute),
      });
      const data = await response.json();
      setDisputes((prevDisputes) => [...prevDisputes, data]);
      setNewDispute({ geohash: '', description: '' });
    } catch (error) {
      console.error('Error submitting dispute:', error);
    }
  };

  return (
    <div>
      <h1>Dispute Resolution</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="geohash">Geohash:</label>
        <input
          type="text"
          id="geohash"
          name="geohash"
          value={newDispute.geohash}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={newDispute.description}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Submit Dispute</button>
      </form>
      <h2>Existing Disputes</h2>
      <ul>
        {disputes.map((dispute) => (
          <li key={dispute.id}>
            <p>Geohash: {dispute.geohash}</p>
            <p>Description: {dispute.description}</p>
            <p>Status: {dispute.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisputesPage;
