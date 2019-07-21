import React from 'react';
import { Link } from 'react-router-dom';

const Error404: React.FC = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <p>Could not found the page.</p>
      <Link to="/">go to home</Link>
    </div>
  );
};

export default Error404;
