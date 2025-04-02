import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Page from './pages/page';
import Profile from './pages/profile';
import Users from './pages/Users';
import Books from './pages/Books';
import TodoPage from './pages/TodoPage';
import LifecyclePage from './pages/LifecyclePage';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ marginTop: '0', paddingTop: '0' }}> {/* Додано стиль */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page" element={<Page />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/books" element={<Books />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/lifecycle" element={<LifecyclePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
