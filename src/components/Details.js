import { Link } from 'gatsby';
import React from 'react';
import { getCurrentUser } from '../utils/auth';

const Home = () => {
  const user = getCurrentUser()
  console.log('user:', user)
  return (
    <div>
      <h1>Profile Details</h1>
      <h2>Test details</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone_number}</p>
      <p>Username: {user.username}</p>
      <Link to="/app/home">Home</Link>
    </div>
  )
}

export default Home