import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Link to="/Photos">Enter</Link>
      </div>
    </div>
  );
};

export default Home;
