import React, { useState } from 'react';
import Cookies from 'js-cookie';

const App = () => {
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSaveCookie = () => {
    // Save the username to a cookie named "username"
    Cookies.set('username', username);
  };

  const handleDeleteCookie = () => {
    // Delete the "username" cookie
    Cookies.remove('username');
    setUsername(''); // Clear the username state
  };

  return (
    <div>
      <h1>Welcome {Cookies.get('username') || 'Guest'}</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={handleInputChange}
      />
      <button onClick={handleSaveCookie}>Save Username</button>
      <button onClick={handleDeleteCookie}>Delete Username</button>
    </div>
  );
};

export default App;
