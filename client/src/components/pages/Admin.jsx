import React, { useState } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});







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