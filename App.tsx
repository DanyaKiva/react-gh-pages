import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import TaskList from "./TaskList";

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

// Initialize Firestore
export const db = getFirestore(app);

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const tasksCollection = collection(db, "tasks");
    const unsubscribe = onSnapshot(tasksCollection, (snapshot) => {
      const tasksData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Task[];
      setTasks(tasksData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
