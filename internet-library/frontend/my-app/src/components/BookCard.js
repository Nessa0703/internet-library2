import React, { useState } from 'react';

const BookCard = ({ book }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleDetails = () => {
      setExpanded(!expanded);
    };

    return (
      <div className="book-card" onClick={toggleDetails}>
        <img src={`/images/${book.cover}`} alt={book.title} />
        <h3>{book.title}</h3>
        <p>Автор: {book.author}</p>
        {expanded && (
          <div>
            <p>Описание: {book.description}</p>
            <p>Год издания: {book.year}</p>
          </div>
        )}
      </div>
    );
};

export default BookCard;