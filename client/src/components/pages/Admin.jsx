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

const AdminData = () => {
    const [selectedUserId, setSelectedUserId] = useState("");
    const { loading, error, data } = useQuery(GET_USERS);
    const { loading:loadingUserData, error:errorUserData, data:userData } = useQuery(GET_USER, {
      variables: { id: selectedUserId },
      skip: !selectedUserId,
    });
  
    if (loading) return <p>Loading Data For Users...</p>;
    if (error) return <p>Error collecting data for Users :</p>;
    if (loadingUserData) return <p>Loading Data For User...</p>;
    if (errorUserData) return <p>Error collecting User data</p>;
  
    const handleUserDataButtonClick = async (id) => {
      setSelectedUserId(id);
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
            <form>
              <label htmlFor="newEmail">New Email:</label>
              <input
                type="email"
                id="newEmail"
              />
              <button type="submit">Update Email</button>
            </form>
            </div>
            </div>
        )}
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