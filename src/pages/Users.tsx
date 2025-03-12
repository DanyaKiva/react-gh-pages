import React from 'react';
import UserProfile from '../components/UserProfile/UserProfile';
import '../styles/Users.css';

const Users: React.FC = () => {
  return (
    <div className="users-container">
      <h1>Users Page</h1>
      
      {/* Test with only required props */}
      <UserProfile name="John Doe" />
      
      {/* Test with age */}
      <UserProfile name="Jane Smith" age={25} />
      
      {/* Test with all props */}
      <UserProfile 
        name="Bob Wilson" 
        age={30} 
        hobby="Photography" 
      />
    </div>
  );
};

export default Users;