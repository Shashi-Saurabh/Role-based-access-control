import React, { useState } from 'react';
import UserList from './UserList';
import RoleList from './RoleList';
import UserForm from './UserForm';
import RoleForm from './RoleForm';
import './index.css';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
  ]);

  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'User', permissions: ['Read'] },
  ]);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const addRole = (role) => {
    setRoles([...roles, { ...role, id: roles.length + 1 }]);
  };

  return (
    <div className="app-container">
      <h1>User & Role Management</h1>
      <div className="form-container">
        <h2>User Management</h2>
        <UserForm addUser={addUser} />
        <UserList users={users} deleteUser={deleteUser} />
      </div>
      <div className="form-container">
        <h2>Role Management</h2>
        <RoleForm addRole={addRole} />
        <RoleList roles={roles} />
      </div>
    </div>
  );
};

export default App;