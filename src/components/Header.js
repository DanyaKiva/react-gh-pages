import React, { useState, useEffect } from "react";
import { addTask, fetchTasks } from "../../firebase";

const Header = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    };
    loadTasks();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (task.trim()) {
      await addTask(task);
      setTasks([...tasks, { task }]);
      setTask("");
    }
  };

  return (
    <header>
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t.task}</li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
