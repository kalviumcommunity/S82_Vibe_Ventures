import { useEffect, useState } from "react";

function Home() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5555/objects")
      .then(response => response.json())
      .then(data => setObjects(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Hello this is my Homepage</h1>
      <h2>Data from cluster</h2>
      {objects.length > 0 ? (
        <ul>
          {objects.map(obj => (
            <li key={obj._id}>
              <strong>First Name:</strong> {obj.firstName}<br/>
              <strong>Last Name:</strong> {obj.lastName}<br/>
              <strong>DOB:</strong> {obj.dob}<br/>
              <strong>Address:</strong> {obj.address}<br/>
              <strong>Message:</strong> {obj.message}<br/>
              <strong>Father:</strong> {obj.fatherName}<br/>
              <strong>Mother:</strong> {obj.motherName}<br/>
              <strong>Siblings:</strong> {obj.noofsiblings}<br/>
              <strong>Date:</strong> {new Date(obj.date).toLocaleDateString()}<br/>
              <hr/>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
}

export default Home;
