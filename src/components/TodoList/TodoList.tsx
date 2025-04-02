import React, { useState, useEffect } from 'react';
import { Task, addTask, fetchTasks, deleteTask, toggleTaskComplete } from '../../firebase';
import './TodoList.css';

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async (): Promise<void> => {
    const tasksData = await fetchTasks();
    setTasks(tasksData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!newTask.trim()) return;

    await addTask(newTask);
    setNewTask('');
    loadTasks();
  };

  const handleDelete = async (taskId: string) => {
    await deleteTask(taskId);
    loadTasks();
  };

  const handleToggleComplete = async (taskId: string, completed: boolean) => {
    await toggleTaskComplete(taskId, completed);
    loadTasks();
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task..."
          className="todo-input"
        />
        <button type="submit" className="todo-button">Add Task</button>
      </form>
      <ul className="todo-list">
        {tasks.map((task) => (
          <li 
            key={task.id} 
            className={`todo-item ${task.completed ? 'completed' : ''}`}
          >
            <div className="todo-item-content">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => task.id && handleToggleComplete(task.id, task.completed || false)}
                className="todo-checkbox"
              />
              <span className="todo-text">{task.task}</span>
            </div>
            <button
              onClick={() => task.id && handleDelete(task.id)}
              className="todo-delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;