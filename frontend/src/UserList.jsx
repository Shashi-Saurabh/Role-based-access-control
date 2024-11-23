import React from 'react';

const UserList = ({ users, deleteUser }) => {
  return (
    <ul className="user-list">
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email} - {user.role} - {user.status}
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;