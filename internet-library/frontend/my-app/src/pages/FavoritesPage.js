import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

const FavoritesPage = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    axios.get('/favorites')
      .then(response => {
        setFavoriteBooks(response.data);
      })
      .catch(error => {
        console.error('Ошибка:', error);
      });
  }, []);

  const handleRemoveFromFavorites = (bookId) => {
    axios.delete(`/remove_from_favorites/${bookId}`);
  };

  return (
    <div className="favorites-page">
      {favoriteBooks.map(book => (
        <BookCard key={book.id} book={book} onFavoriteClick={handleRemoveFromFavorites} />
      ))}
    </div>
  );
};

export default FavoritesPage;