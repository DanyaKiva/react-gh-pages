import React from 'react';
import './UserProfile.css';

interface UserProfileProps {
  name: string;
  age?: number;
  hobby?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, age, hobby }) => {
  return (
    <div className="user-profile">
      <h2 className="user-profile__name">{name}</h2>
      {age && <p className="user-profile__age">Age: {age}</p>}
      {hobby && <p className="user-profile__hobby">Hobby: {hobby}</p>}
    </div>
  );
};

export default UserProfile;
