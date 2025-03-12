import React, { useState, useMemo } from 'react';
import { Book } from '../../data/books';
import './BookList.css';

interface BookListProps {
  books: Book[];
}

type SortOrder = 'asc' | 'desc';

const BookList: React.FC<BookListProps> = ({ books }) => {
  const [sortField, setSortField] = useState<keyof Book>('title');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [filterText, setFilterText] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('all');

  const genres = useMemo(() => {
    return ['all', ...new Set(books.map(book => book.genre || 'uncategorized'))];
  }, [books]);

  const filteredAndSortedBooks = useMemo(() => {
    return books
      .filter(book => {
        const matchesText = book.title.toLowerCase().includes(filterText.toLowerCase()) ||
                          book.author.toLowerCase().includes(filterText.toLowerCase());
        const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre;
        return matchesText && matchesGenre;
      })
      .sort((a, b) => {
        const compareResult = typeof a[sortField] === 'string'
          ? (a[sortField] as string).localeCompare(b[sortField] as string)
          : (a[sortField] as number) - (b[sortField] as number);
        return sortOrder === 'asc' ? compareResult : -compareResult;
      });
  }, [books, sortField, sortOrder, filterText, selectedGenre]);

  const handleSort = (field: keyof Book) => {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  return (
    <div className="book-list">
      <div className="controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search books..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
        </div>
        
        <div className="genre-filter">
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {genres.map(genre => (
              <option key={genre} value={genre}>
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="sort-controls">
        {['title', 'author', 'year', 'rating'].map(field => (
          <button
            key={field}
            onClick={() => handleSort(field as keyof Book)}
            className={sortField === field ? 'active' : ''}
          >
            {field.charAt(0).toUpperCase() + field.slice(1)}
            {sortField === field && (
              <span className="sort-indicator">
                {sortOrder === 'asc' ? ' ↑' : ' ↓'}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="books-grid">
        {filteredAndSortedBooks.map((book) => (
          <div key={book.id} className={`book-card ${!book.isAvailable ? 'unavailable' : ''}`}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
            {book.genre && <p>Genre: {book.genre}</p>}
            {book.rating && (
              <p className="rating">
                Rating: {book.rating} 
                <span className="stars">
                  {'★'.repeat(Math.floor(book.rating))}
                  {'☆'.repeat(5 - Math.floor(book.rating))}
                </span>
              </p>
            )}
            <div className="availability">
              {/* {book.isAvailable ? 'Available' : 'Not Available'} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;