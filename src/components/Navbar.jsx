import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.nav-links') && !e.target.closest('.burger')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)} />
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-brand">
          <NavLink to="/" className="site-name">My App</NavLink>
        </div>
        
        <div className={`burger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/page">Page</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
          <li><NavLink to="/books">Books</NavLink></li>
          <li><NavLink to="/todo">Todo</NavLink></li>
        </ul>
        <button
          onClick={() => dispatch(toggleTheme())}
          className="theme-toggle"
          style={{ color: theme === 'light' ? '#FDB813' : '#FFD700' }} // Set dynamic color
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </nav>
    </>
  );
};

export default Navbar;