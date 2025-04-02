import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCuzY7sFoDLNTC4IwwT7Ol-JpU1jOkBDs",
  authDomain: "reactproject-415cd.firebaseapp.com",
  databaseURL: "https://reactproject-415cd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reactproject-415cd",
  storageBucket: "reactproject-415cd.firebasestorage.app",
  messagingSenderId: "93234323338",
  appId: "1:93234323338:web:92ad4bdc973ae0966bf273",
  measurementId: "G-VE8KH6GFC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Define task interface
export interface Task {
  id?: string;
  task: string;
  completed?: boolean;
  createdAt?: Date;
}

// Add task function with type safety
export const addTask = async (taskText: string): Promise<void> => {
  try {
    const task: Task = {
      task: taskText,
      completed: false,
      createdAt: new Date()
    };
    await addDoc(collection(db, "tasks"), task);
  } catch (error) {
    console.error("Error adding task: ", error);
  }
};

// Fetch tasks function with type safety
export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    } as Task));
  } catch (error) {
    console.error("Error fetching tasks: ", error);
    return [];
  }
};

export const deleteTask = async (taskId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, "tasks", taskId));
  } catch (error) {
    console.error("Error deleting task: ", error);
  }
};

export const toggleTaskComplete = async (taskId: string, completed: boolean): Promise<void> => {
  try {
    await updateDoc(doc(db, "tasks", taskId), {
      completed: !completed
    });
  } catch (error) {
    console.error("Error updating task: ", error);
  }
};

export { db };