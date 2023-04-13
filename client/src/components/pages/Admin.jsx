import React, { useState } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery, useMutation } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

// query for all users
const GET_USERS = gql`
  query {
    users {
      _id
      username
      email
      password
    }
  }
`;

// query for a single user data
const GET_USER = gql`
  query ($id: ID!) {
    user(_id: $id) {
      _id
      username
      email
      password
    }
  }
`;

// mutation for updating a user's email
const UPDATE_USER = gql`
  mutation UpdateUser($_id: ID!, $email: String!) {
    updateUser(_id: $_id, email: $email) {
      _id
      username
      email
      password
    }
  }
`;

// mutation for deleting a user
const DELETE_USER = gql`
  mutation DeleteUser($_id: ID!) {
    deleteUser(_id: $_id) {
      _id
      username
      email
      password
    }
  }
`;

// AdminData component where most of the logic will be
const AdminData = () => {
  // setting state for selected user and new email
  const [selectedUserId, setSelectedUserId] = useState("");
  const [newEmail, setNewEmail] = useState("");

  // READ - using useQuery hook to query for all users and a single user
  const { loading, error, data } = useQuery(GET_USERS);
  const { loading:loadingUserData, error:errorUserData, data:userData } = useQuery(GET_USER, {
    variables: { id: selectedUserId },
    skip: !selectedUserId,
  });
  // UPDATE - using useMutation hook to update a user's email and refetch the user data after updating the email
  const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: [{ query: GET_USER, variables: { id: selectedUserId } }],
  });
  // DELETE - using useMutation hook to delete a user and refetch the user data after deleting the user
  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  // setting state for modal display
  const [showModal, setShowModal] = useState(false);

  if (loading) return <p>Loading Data For Users...</p>;
  if (error) return <p>Error collecting data for Users :</p>;
  if (loadingUserData) return <p>Loading Data For User...</p>;
  if (errorUserData) return <p>Error collecting User data</p>;  

  // when a user is selected, set that user as the selected user
  const handleUserDataButtonClick = async (id) => {
    setSelectedUserId(id);
  };

  // see form below, when an input is entered, set the new email state to the input value
  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  // this is how the form below is submitted; prevent the page from reloading on submission
  const handleEmailSubmit = async (event) => {
    event.preventDefault();
    // if there is no new email, alert the user to enter a new email
    if (!newEmail) {
      alert('Please enter a new email address');
      return;
    }
    // if there is a new email, update the user's email with the graphql mutation then reset the new email state
    try {
      await updateUser({ variables: { _id: selectedUserId, email: newEmail } });
      alert('Email updated successfully');
      setNewEmail('');
    // if there is an error, log the error and alert the user
    } catch (error) {
      console.error(error);
      alert('Error updating email');
    }
  };

  // see div below, when the delete user button is clicked, open the modal
  const handleModalOpen = () => {
    setShowModal(true);
  };
  
  // see div below, when the modal is open, when the no button is clicked, close the modal and stop deleting the user
  const handleModalClose = () => {
    setShowModal(false);
  };

  // see div below, when the modal is open, when the yes button is clicked, delete the user and close the modal, resets the selected user state
  const handleDeleteUser = async () => {
    try {
      await deleteUser({ variables: { _id: selectedUserId } });
      setSelectedUserId("");
      handleModalClose();
      alert("User deleted successfully");
    } catch (error) {
      console.error(error);
      alert("Error deleting user");
    }
  };

  return (
    <>
      <h1>Admin Data</h1>
      <h2>Users:</h2>
      <ul>
        {data.users.map((user) => (
          <li key={user._id}>
            {user.username} :  <button onClick={() => handleUserDataButtonClick(user._id)}>Get Data for {user.username}</button>
          </li>
        ))}
      </ul>
      {userData && (
        <div>
          <div>
            <h2>Selected User Data:</h2>
            <p>ID: {userData.user._id}</p>
            <p>Username: {userData.user.username}</p>
            <p>Email: {userData.user.email}</p>
            <p>Password: {userData.user.password}</p>
          </div>
          <div>
            <h2>Update Email:</h2>
            <form onSubmit={handleEmailSubmit}>
              <label htmlFor="newEmail">New Email:</label>
              <input
                type="email"
                id="newEmail"
                value={newEmail}
                onChange={handleEmailChange}
              />
              <button type="submit">Update Email</button>
            </form>
            <button onClick={handleModalOpen}>Delete User</button>
          </div>
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <h2>Confirm Delete User</h2>
                <p>This action is irreversible and the user will be permanently removed from the system. Do you wish to continue?</p>
                <div className="modal-buttons">
                  <button onClick={handleDeleteUser}>Yes</button>
                  <button onClick={handleModalClose}>No</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {loading && <p>Loading Data For Users...</p>}
      {error && <p>Error collecting data for Users :</p>}
      {loadingUserData && <p>Loading Data For User...</p>}
      {errorUserData && <p>Error collecting User data</p>}
    </>
  );
};

const Admin = () => {
  return (
    // ApolloProvider component to wrap the AdminData component, it should have been on the App.js file but I had to move it here to make it work due to conflicts with the themeprovider component
    <ApolloProvider client={client}>
      <AdminData />
    </ApolloProvider>
  );
};

export default Admin;