import React from 'react';

const RoleList = ({ roles }) => {
  return (
    <ul className="role-list">
      {roles.map(role => (
        <li key={role.id}>
          {role.name}: {role.permissions.join(', ')}
        </li>
      ))}
    </ul>
  );
};

export default RoleList;