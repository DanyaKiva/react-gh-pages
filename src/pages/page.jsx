import React from 'react';
import Comments from '../components/Comments';
import './page.css';

const Page = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Welcome to the Comments Page</h1>
      <p className="page-description">
      </p>
      <Comments />
    </div>
  );
};

export default Page;