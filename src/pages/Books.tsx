import React from 'react';
import BookList from '../components/BookList/BookList';
import { books } from '../data/books';

const Books: React.FC = () => {
  return (
    <div className="books-page">
      <h1>Books Collection</h1>
      <BookList books={books} />
    </div>
  );
};

export default Books;