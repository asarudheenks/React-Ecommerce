import React, { useContext, useState } from 'react';
import { Mycontext } from '../Context/Context';
import { Button, Form } from 'react-bootstrap';

function Profile() {
  const { User, setUser } = useContext(Mycontext);
  const [editMode, setEditMode] = useState(false);
  const [editedUsername, setEditedUsername] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedPassword, setEditedPassword] = useState('');

  const userIndex = User.findIndex((user) => user.Username);
  const userDetail = User[userIndex];

  const handleEditClick = () => {
    setEditMode(true);
    setEditedUsername(userDetail.Username)
    setEditedEmail(userDetail.Email);
    setEditedPassword(userDetail.Password);
  };

  const handleSaveClick = () => {
    
    const updatedUser = { ...userDetail, USername: editedUsername, Email: editedEmail, Password: editedPassword };

    const updatedUsers = [...User];
    updatedUsers[userIndex] = updatedUser;
    setUser(updatedUsers);

    setEditMode(false);
  };

  return (
    <div>
      <Button onClick={editMode ? handleSaveClick : handleEditClick}>
        {editMode ? 'Save' : 'Edit'}
      </Button>
     
      {editMode ? (
        <Form>
           <Form.Group controlId="formEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={editedUsername}
              onChange={(e) => setEditedUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={editedPassword}
              onChange={(e) => setEditedPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
      ) : (
        <div>
           User name : <h1>{userDetail.Username}</h1>
          Email : <h1>{userDetail.Email}</h1>
          Password :<h1>{userDetail.Password}</h1>
        </div>
      )}
    </div>
  );
}

export default Profile;
