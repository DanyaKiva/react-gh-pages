import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore database instance
export const db = getFirestore(app);

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const markAsCompleted = async (taskId: string) => {
    try {
      const taskRef = doc(db, "tasks", taskId);
      await updateDoc(taskRef, { completed: true });
      console.log("Task marked as completed");
    } catch (error) {
      console.error("Error marking task as completed:", error);
    }
  };

  const deleteTask = async (taskId: string) => {
    try {
      const taskRef = doc(db, "tasks", taskId);
      await deleteDoc(taskRef);
      console.log("Task deleted");
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
          </span>
          {!task.completed && (
            <button onClick={() => markAsCompleted(task.id)}>Mark as Completed</button>
          )}
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
