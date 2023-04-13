import React, { useState } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

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

const AdminData = () => {
    const [selectedUserId, setSelectedUserId] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const { loading, error, data } = useQuery(GET_USERS);
    const { loading:loadingUserData, error:errorUserData, data:userData } = useQuery(GET_USER, {
      variables: { id: selectedUserId },
      skip: !selectedUserId,
    });
  
    if (loading) return <p>Loading Data For Users...</p>;
    if (error) return <p>Error collecting data for Users :</p>;
    if (loadingUserData) return <p>Loading Data For User...</p>;
    if (errorUserData) return <p>Error collecting User data</p>;
  
    const [updateUser] = useMutation(UPDATE_USER, {
      refetchQueries: [{ query: GET_USER, variables: { id: selectedUserId } }],
    });
  
    const handleUserDataButtonClick = async (id) => {
      setSelectedUserId(id);
    };
  
    const handleEmailChange = (event) => {
      setNewEmail(event.target.value);
    };
  
    const handleEmailSubmit = async (event) => {
      event.preventDefault();
  
      if (!newEmail) {
        alert("Please enter a new email address");
        return;
      }
  
      try {
        await updateUser({ variables: { _id: selectedUserId, email: newEmail } });
        alert("Email updated successfully");
        setNewEmail("");
      } catch (error) {
        console.error(error);
        alert("Error updating email");
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
            </div>
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
    <ApolloProvider client={client}>
      <AdminData />
    </ApolloProvider>
  );
};

export default Admin;