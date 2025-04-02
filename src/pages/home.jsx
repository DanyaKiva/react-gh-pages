import React, { useEffect, useState } from 'react';
import './home.css';

const Home = () => {
  const [bookCount, setBookCount] = useState(0);

  useEffect(() => {
    // Retrieve books from localStorage and set the count
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBookCount(JSON.parse(storedBooks).length);
    }
  }, []);

  return (
    <div className="home-container">
      <h1>Головна сторінка</h1>
      <p className="book-count">Загальна кількість книг: {bookCount}</p>
    </div>
  );
};

export default Home;