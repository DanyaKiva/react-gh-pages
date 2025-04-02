import React from 'react';
import TodoList from '../components/TodoList/TodoList';

const TodoPage: React.FC = () => {
  return (
    <div className="todo-page">
      <TodoList />
    </div>
  );
};

export default TodoPage;