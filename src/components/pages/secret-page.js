import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <h2> Welcome User </h2>
  }
  return <Redirect to="/login" />
}

export default SecretPage;