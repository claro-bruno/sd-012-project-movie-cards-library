import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Header from './components/Header';
import movies from './data';

function App() {
  return (
    <div>
      <Header />
      ,
      <MovieList movie={ movies } />
    </div>
  );
}

export default App;
