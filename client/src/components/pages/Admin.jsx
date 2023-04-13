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

  
    if (loading) return <p>Loading Data For Users...</p>;
    if (error) return <p>Error collecting data for Users :</p>;

  

  
    return (
      <>
        <h1>Admin Data</h1>
       
      </>
    );
  };


const Admin = () => {
  return (
    
  );
};

export default Admin;