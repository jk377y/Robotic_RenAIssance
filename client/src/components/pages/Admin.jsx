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





const AdminData = () => {


  

  
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