import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('User');
  const [status, setStatus] = useState('Active');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, email, role, status });
    setName('');
    setEmail('');
    setRole('User');
    setStatus('Active');
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="User">User</option>
        <option value="Admin">Admin</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;