interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  active: boolean;
}

interface UserListProps {
  users: User[];
  onUserSelect: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onUserSelect }) => {
  return (
    <div className="user-list">
      <h2>Users List</h2>
      <div className="user-grid">
        {users.map((user) => (
          <div 
            key={user.id} 
            className={`user-card ${user.active ? 'active' : 'inactive'}`}
            onClick={() => onUserSelect(user)}
          >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <span className="role-badge">{user.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;