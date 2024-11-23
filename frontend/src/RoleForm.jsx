import React, { useState } from 'react';

const RoleForm = ({ addRole }) => {
  const [name, setName] = useState('');
  const [permissions, setPermissions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRole({ name, permissions: permissions.split(',').map(p => p.trim()) });
    setName('');
    setPermissions('');
  };

  return (
    <form onSubmit={handleSubmit} className="role-form">
      <input type="text" placeholder="Role Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Permissions (comma separated)" value={permissions} onChange={(e) => setPermissions(e.target.value)} required />
      <button type="submit">Add Role</button>
    </form>
  );
};

export default RoleForm;