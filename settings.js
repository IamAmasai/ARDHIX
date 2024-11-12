import React, { useState } from "react";

const SettingsPage = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [notifications, setNotifications] = useState(false);
  const [accountSettings, setAccountSettings] = useState({
    email: "",
    password: "",
  });

  const handleWalletAddressChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleNotificationsChange = (e) => {
    setNotifications(e.target.checked);
  };

  const handleAccountSettingsChange = (e) => {
    const { name, value } = e.target;
    setAccountSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleSaveSettings = () => {
    // Save settings logic here
    alert("Settings saved!");
  };

  return (
    <div>
      <h1>Settings</h1>
      <div>
        <label htmlFor="walletAddress">Wallet Address</label>
        <input
          type="text"
          id="walletAddress"
          value={walletAddress}
          onChange={handleWalletAddressChange}
        />
      </div>
      <div>
        <label htmlFor="notifications">Enable Notifications</label>
        <input
          type="checkbox"
          id="notifications"
          checked={notifications}
          onChange={handleNotificationsChange}
        />
      </div>
      <div>
        <h2>Account Settings</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={accountSettings.email}
          onChange={handleAccountSettingsChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={accountSettings.password}
          onChange={handleAccountSettingsChange}
        />
      </div>
      <button onClick={handleSaveSettings}>Save Settings</button>
    </div>
  );
};

export default SettingsPage;
