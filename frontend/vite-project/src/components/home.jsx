import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Home() {
  const [objects, setObjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(""); // ✅ Add this line

    useEffect(() => {
    fetch("http://localhost:5555/objects")
      .then(response => response.json())
      .then(data => setObjects(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);
  // Fetch users when the component is mounted
  useEffect(() => {
    fetch("http://localhost:5555/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("User fetch error:", err));
  }, []);

  // Fetch objects based on selected user
  useEffect(() => {
    const url = selectedUserId
      ? `http://localhost:5555/objects/by-user/${selectedUserId}`
      : "http://localhost:5555/objects"; // Default to all objects if no user selected

    fetch(url)
      .then((res) => res.json())
      .then((data) => setObjects(data))
      .catch((err) => console.error("Object fetch error:", err));
  }, [selectedUserId]);

  return (
    <div>
      <h1>Hello this is my Homepage</h1>
      <Link to='/search'>
        <button>Search for place</button>
      </Link>
      <Link to='/login'>
      <button>Login</button>
      </Link>
      <h2>Data from cluster</h2>
      {objects.length > 0 ? (
        <ul>
          {objects.map(obj => (
            <li key={obj._id}>
              <strong>First Name:</strong> {obj.firstName}<br />
              <strong>Last Name:</strong> {obj.lastName}<br />
              <strong>DOB:</strong> {obj.dob}<br />
              <strong>Address:</strong> {obj.address}<br />
              <strong>Message:</strong> {obj.message}<br />
              <strong>Father:</strong> {obj.fatherName}<br />
              <strong>Mother:</strong> {obj.motherName}<br />
              <strong>Siblings:</strong> {obj.noofsiblings}<br />
              <strong>Date:</strong> {new Date(obj.date).toLocaleDateString()}<br />
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>No data found.</p>
      )}

      <div>
        <h3>Filter by user</h3>
        <select onChange={(e) => setSelectedUserId(e.target.value)} value={selectedUserId}>
          <option value="">All Users</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.username || user.name || user.email || user._id}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Home;
