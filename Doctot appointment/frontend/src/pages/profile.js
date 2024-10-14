import React, { useState, useEffect } from 'react';
import './profile.css'
const ClientProfile = () => {
  // Client state holding profile information
  const [client, setClient] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    dob: '1990-01-01',
    gender: 'Male',
    address: '123 Main St, Anytown, USA'
  });

  // Editable state to toggle between view and edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Handler to toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient({
      ...client,
      [name]: value,
    });
  };

  // Handler to save the updated profile (simulating an API call)
  const handleSave = () => {
    setIsEditing(false);
    // Simulate saving to the server
    console.log('Profile updated:', client);
  };

  return (
    <div className="client-profile">
      <h2>Client Profile</h2>

      {isEditing ? (
        <div className="edit-profile">
          <label>
            Name: <input type="text" name="name" value={client.name} onChange={handleChange} />
          </label>
          <label>
            Email: <input type="email" name="email" value={client.email} onChange={handleChange} />
          </label>
          <label>
            Phone: <input type="text" name="phone" value={client.phone} onChange={handleChange} />
          </label>
          <label>
            Date of Birth: <input type="date" name="dob" value={client.dob} onChange={handleChange} />
          </label>
          <label>
            Gender:
            <select name="gender" value={client.gender} onChange={handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Address: <input type="text" name="address" value={client.address} onChange={handleChange} />
          </label>

          <button onClick={handleSave}>Save</button>
          <button onClick={toggleEdit}>Cancel</button>
        </div>
      ) : (
        <div className="view-profile">
          <p><strong>Name:</strong> {client.name}</p>
          <p><strong>Email:</strong> {client.email}</p>
          <p><strong>Phone:</strong> {client.phone}</p>
          <p><strong>Date of Birth:</strong> {client.dob}</p>
          <p><strong>Gender:</strong> {client.gender}</p>
          <p><strong>Address:</strong> {client.address}</p>

          <button onClick={toggleEdit}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default ClientProfile;