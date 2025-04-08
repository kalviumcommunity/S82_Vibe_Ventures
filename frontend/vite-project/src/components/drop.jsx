import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDropdown = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [userObjects, setUserObjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5555/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    const userId = e.target.value;
    setSelectedUser(userId);

    axios.get(`http://localhost:5555/objects/by-user/${userId}`)
      .then(res => setUserObjects(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Select a User</h2>
      <select onChange={handleChange} value={selectedUser}>
        <option value="">-- Select User --</option>
        {users.map(user => (
          <option key={user._id} value={user._id}>{user.email}</option>
        ))}
      </select>

      <h3>Objects Created by User</h3>
      <ul>
        {userObjects.map((obj, index) => (
          <li key={index}>{obj.firstName} - {obj.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDropdown;
