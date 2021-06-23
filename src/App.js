import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieCard movie={ movies[0] } />
    </div>
  );
}

export default App;
