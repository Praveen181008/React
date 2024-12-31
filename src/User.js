import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser, removeName } from './slices/userSlice';

function User() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const names = useSelector((state) => state.users.names);

  const handleDeleteUser = (index) => {
    dispatch(removeUser(index));
  };

  const handleDeleteName = (index) => {
    dispatch(removeName(index));
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const thTdStyle = {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
  };

  const headerStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    padding: '8px 12px',
    margin: '0 5px',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f44336',
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
      <div>
        <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '10px' }}>Names</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={{ ...thTdStyle, ...headerStyle }}>Person 1</th>
              <th style={{ ...thTdStyle, ...headerStyle }}>Person 2</th>
              <th style={{ ...thTdStyle, ...headerStyle }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {names.length > 0 ? (
              names.map((name, index) => (
                <tr key={index}>
                  <td style={thTdStyle}>{name.person1}</td>
                  <td style={thTdStyle}>{name.person2}</td>
                  <td style={thTdStyle}>
                    <button style={deleteButtonStyle} onClick={() => handleDeleteName(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ ...thTdStyle, color: '#888' }}>No names found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div>
        <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '10px' }}>Users</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={{ ...thTdStyle, ...headerStyle }}>Name</th>
              <th style={{ ...thTdStyle, ...headerStyle }}>Age</th>
              <th style={{ ...thTdStyle, ...headerStyle }}>Email</th>
              <th style={{ ...thTdStyle, ...headerStyle }}>Contact</th>
              <th style={{ ...thTdStyle, ...headerStyle }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index}>
                  <td style={thTdStyle}>{user.name}</td>
                  <td style={thTdStyle}>{user.age}</td>
                  <td style={thTdStyle}>{user.email}</td>
                  <td style={thTdStyle}>{user.contact}</td>
                  <td style={thTdStyle}>
                    <button style={deleteButtonStyle} onClick={() => handleDeleteUser(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ ...thTdStyle, color: '#888' }}>No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
